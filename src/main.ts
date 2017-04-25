import { Color, Engine, FontUnit, Label } from "excalibur";

declare class WebFont {
    public static load(options: object): void;
}

window.onload = () => {
    WebFont.load({
        active: () => {
            const game = new Engine({ width: 500, height: 500 });

            const label = new Label();
            label.fontFamily = "SongTi, Arial, Sans-Serif";
            label.fontSize = 20;
            label.fontUnit = FontUnit.Em;
            label.text = "Nice";
            label.color = Color.White;
            game.add(label);
            game.backgroundColor = Color.Black;
            game.start();
        },
        custom: {
            families: ["SongTi"],
            urls: ["assets/fonts/font.css"],
        },
    });
};
