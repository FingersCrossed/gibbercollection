/*
Happy Birthday - by Beau Herron
In this sketch, the synth plays the rythym of
Happy Birthday over a simple drum loop.
*/

a = Drums('x*o*x*o*')
a.pitch = Mouse.Y

synth = Synth()

synth.play(['c4', 'c4', 'd4', 'c4', 'f4', 'fb4', 'c4', 'c4', 'd4', 'c4', 'g4', 'f4'],
           [ 1/8, 1/8, 1/4, 1/2, 1/4, 3/4, 1/8, 1/8, 1/4, 1/2, 1/4, 3/4  ]
         )
