# Magic-Mirror-Screensaver

Dieses Magic Mirror Module ist dafür da einen ScreenSaver zu erstellen, wo sie ihre eigenen Bilder auswählen können. 

Du musst in das verzeichnis Magic Mirror und dann in die Module und dann gibst du diesen Befehl ein.
´´´
git clone https://github.com/Xenuzz/Magic-Mirror-Screensaver
´´´
Wenn das Module heruntergeladen ist gehst du in deine config.js im config Ordner
und fügst diesen Code ein
Config: 
```
modules: [
  {
    module: "MMM-ScreenSaver",
    config: {
      images: [
        "path/to/image1.jpg",
        "path/to/image2.png",
        "path/to/image3.gif"
      ]
    }
  }
]
```
