import os
from PIL import Image, ImageDraw, ImageFont

output_dir = r"C:\Users\HP\.gemini\antigravity\scratch\hawcoders-website\public\branding"
os.makedirs(output_dir, exist_ok=True)

# Colors
COLOR_DARK_TEXT = (15, 23, 42)       # Slate 900
COLOR_SUB_TEXT = (100, 116, 139)     # Slate 500
COLOR_BADGE_BG = (241, 245, 249)     # Slate 100
COLOR_BADGE_BORDER = (203, 213, 225) # Slate 300
COLOR_BADGE_TEXT = (30, 41, 59)      # Slate 800

# Fonts
font_mono = ImageFont.truetype(r"C:\Windows\Fonts\consolab.ttf", 46)
font_serif = ImageFont.truetype(r"C:\Windows\Fonts\georgiab.ttf", 52)
font_sans = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 22)

def generate_logo(filename, bg_color=None, dark_mode=False):
    # Canvas
    width, height = 720, 220
    if bg_color is None:
        img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    else:
        img = Image.new("RGBA", (width, height), bg_color)
    
    draw = ImageDraw.Draw(img)

    text_main = (255, 255, 255) if dark_mode else COLOR_DARK_TEXT
    text_sub = (148, 163, 184) if dark_mode else COLOR_SUB_TEXT
    badge_bg = (30, 41, 59) if dark_mode else COLOR_BADGE_BG
    badge_border = (71, 85, 105) if dark_mode else COLOR_BADGE_BORDER
    badge_text = (241, 245, 249) if dark_mode else COLOR_BADGE_TEXT

    # 1. Badge [ |=| ]
    # Badge rectangle: (x0, y0, x1, y1)
    badge_x0, badge_y0 = 40, 60
    badge_w, badge_h = 100, 95
    badge_x1, badge_y1 = badge_x0 + badge_w, badge_y0 + badge_h
    
    draw.rounded_rectangle(
        [badge_x0, badge_y0, badge_x1, badge_y1],
        radius=14,
        fill=badge_bg,
        outline=badge_border,
        width=3
    )

    # Symbol |=| centered inside badge
    symbol = "|=| "
    # Measure text
    bbox = draw.textbbox((0, 0), "|=|", font=font_mono)
    sw = bbox[2] - bbox[0]
    sh = bbox[3] - bbox[1]
    sym_x = badge_x0 + (badge_w - sw) / 2
    sym_y = badge_y0 + (badge_h - sh) / 2 - 4
    draw.text((sym_x, sym_y), "|=|", font=font_mono, fill=badge_text)

    # 2. Main title "Hawcoder"
    title_x = badge_x1 + 28
    title_y = 62
    draw.text((title_x, title_y), "Hawcoder", font=font_serif, fill=text_main)

    # 3. Subtitle "Hawassa • AddisCoder 2026 Alumni"
    sub_y = title_y + 58
    draw.text((title_x, sub_y), "Hawassa • AddisCoder 2026 Alumni", font=font_sans, fill=text_sub)

    # Save
    path = os.path.join(output_dir, filename)
    img.save(path, "PNG")
    print(f"Saved: {path}")

# 1. Transparent PNG (standard presentation slide overlay)
generate_logo("hawcoder-logo-transparent.png", bg_color=None)

# 2. White background PNG (for standard white slides)
generate_logo("hawcoder-logo-white-bg.png", bg_color=(255, 255, 255, 255))

# 3. Dark background PNG (for dark slide decks)
generate_logo("hawcoder-logo-dark.png", bg_color=(15, 23, 42, 255), dark_mode=True)

# 4. Icon only / Avatar badge (square 512x512)
icon_img = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
icon_draw = ImageDraw.Draw(icon_img)

# Large badge
icon_font_mono = ImageFont.truetype(r"C:\Windows\Fonts\consolab.ttf", 200)
icon_draw.rounded_rectangle([48, 48, 464, 464], radius=90, fill=COLOR_BADGE_BG, outline=COLOR_BADGE_BORDER, width=14)
bbox = icon_draw.textbbox((0, 0), "|=|", font=icon_font_mono)
sw = bbox[2] - bbox[0]
sh = bbox[3] - bbox[1]
icon_draw.text((48 + (416 - sw) / 2, 48 + (416 - sh) / 2 - 16), "|=|", font=icon_font_mono, fill=COLOR_BADGE_TEXT)

icon_path = os.path.join(output_dir, "hawcoder-icon-square.png")
icon_img.save(icon_path, "PNG")
print(f"Saved: {icon_path}")
