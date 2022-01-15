### Snake

#### Basic Snake Game for the Browser

Regeln:
    Snake 1 -> Schlange stirbt wenn sie die Wand oder sich selbst berührt -> Game Over
    Es befindet sich immer ein Food in der Arena
    Wenn Schlange Food aufnimmt, erhöht sich ihre Länge um 1

Großes Problem -> Herunterbrechen in kleinere Probleme

Großes Problem: Implementierung von Snake im Browser

1) Rendering im Browser (<canvas>...) #check
2) 'Schlange' rendern (zu Beginn Rechteck, also nur Schlangenkopf) #check
3) Game Loop implementieren (Schlangenkopf in eine Richtung bewegen) #check
3.1) Schlange bewegen (4 Richtungen) #check
4) Bewegungsrichtung über Benutzereingabe #check
5) Food spawnen
6) Schlange kann Food einsammeln und neues Food spawnt
(Food spawnt nicht in der Schlange aber ansonsten zufällig)
7) Kollision Schlangenkopf mit der Wand erkennen
8) Schlangenkörper implementieren, Körper folgt dem Kopf, wächst mit Aufnahme von Food
9) Kollision mit dem Schlangenkörper
