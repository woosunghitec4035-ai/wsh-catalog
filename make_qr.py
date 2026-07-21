# -*- coding: utf-8 -*-
"""
제품 카탈로그 QR코드 생성기
사용법:
    python make_qr.py                       # 기본 URL로 2종 생성
    python make_qr.py "https://다른주소/"    # URL 지정

- 오류정정 레벨 H(30%)
- 우성하이텍 그린 색상 적용
- 출력 2종 (300dpi 인쇄용)
    qr_catalog.png     : 외부·전시회용 (비밀번호 미표기)
    qr_catalog_pw.png  : 사내 배포용   (비밀번호 함께 표기)
"""
import sys
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw, ImageFont

URL = sys.argv[1] if len(sys.argv) > 1 else "https://woosunghitec4035-ai.github.io/wsh-catalog/"
PW = "8801"

GREEN = (51, 166, 72)    # 우성하이텍 그린
DARK = (26, 26, 26)      # QR 모듈 색
BOX = 20                 # 모듈당 픽셀(인쇄용 고해상도)
BORDER = 4               # 여백(quiet zone) 모듈 수


def font(size):
    for name in ("malgunbd.ttf", "malgun.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            continue
    return ImageFont.load_default()


def centered(draw, text, f, cx, top):
    """텍스트를 cx 기준 가운데 정렬해 top 위치에 그린다."""
    tb = draw.textbbox((0, 0), text, font=f)
    draw.text((cx - (tb[2] - tb[0]) / 2, top - tb[1]), text, fill="white", font=f)
    return tb[3] - tb[1]


def build(out, title, sub=None):
    qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H,
                       box_size=BOX, border=BORDER)
    qr.add_data(URL)
    qr.make(fit=True)

    img = qr.make_image(fill_color=DARK, back_color="white").convert("RGB")
    W, H = img.size

    bar_h = int(W * (0.20 if sub else 0.14))
    canvas = Image.new("RGB", (W, H + bar_h), "white")
    canvas.paste(img, (0, 0))
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, H, W, H + bar_h], fill=GREEN)

    if sub:
        f1, f2 = font(int(bar_h * 0.28)), font(int(bar_h * 0.22))
        h1 = centered(draw, title, f1, W / 2, H + bar_h * 0.22)
        centered(draw, sub, f2, W / 2, H + bar_h * 0.22 + h1 + bar_h * 0.16)
    else:
        f1 = font(int(bar_h * 0.42))
        tb = draw.textbbox((0, 0), title, font=f1)
        draw.text(((W - (tb[2] - tb[0])) / 2, H + (bar_h - (tb[3] - tb[1])) / 2 - tb[1]),
                  title, fill="white", font=f1)

    canvas.save(out, dpi=(300, 300))
    print("[OK] %s  (%dx%dpx)" % (out, canvas.size[0], canvas.size[1]))


build("qr_catalog.png", "우성하이텍 제품 카탈로그")
build("qr_catalog_pw.png", "우성하이텍 제품 카탈로그", "비밀번호  %s" % PW)
print("     URL : %s" % URL)
