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
[ ] Neues Food spawnt -> zufällig -> nicht wo der Schlangenkopf (bzw. Koerper) ist 
[ ] Schlangenkoerper implementieren, Koerper folgt dem Kopf, waechst mit Aufnahme von Food
[ ] Kollision von Schlange mit dem Schlangenkoerper
[ ] Game-Over implementeren
[ ] Optimierungen?
