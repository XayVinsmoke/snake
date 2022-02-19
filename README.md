### Snake

#### Basic Snake Game for the Browser

Regeln:
    Snake 1 -> Schlange stirbt wenn sie die Wand oder sich selbst berührt -> Game Over
    Es befindet sich immer ein Food in der Arena
    Wenn Schlange Food aufnimmt, erhöht sich ihre Länge um 1

Großes Problem -> Herunterbrechen in kleinere Probleme

Großes Problem: Implementierung von Snake im Browser

Kleinere Probleme:
[x] Generelles Rendering im Browser (<canvas>...) 

[x] 'Schlange' rendern (zu Beginn Rechteck, also nur Schlangenkopf) 

[x] Game Loop implementieren (Schlangenkopf in eine Richtung bewegen) 

[x] Schlange bewegen (4 Richtungen, User Input)

[x] Food rendern 

[x] Kollision von Schlange und Food erkennen -> Food verschwindet 

[x] Kollision von Schlange mit Wand erkennen -> Schlange geht nicht über Rand hinaus

[x] Neues Food spawnt -> zufällig

   [x] Food spawnt nicht auf dem Schlangenkopf

   [ ] Food spawnt nicht auf dem Schlangenkörper

[x] Schlangenkoerper implementieren, Koerper folgt dem Kopf, 

[x] Schlangenkoerper waechst mit Aufnahme von Food

[x] Kollision von Schlange mit dem Schlangenkoerper

[x] Game-Over implementeren

[x] Kollision von Schlange mit Wand 

[ ] Optimierungen?

