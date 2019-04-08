/*
Giblet #1 - by thecharlie
In this sketch, the mouse position drives the
pitch of drums, the carrier to modulation
ratio of FM synthesis, and the feedback and
time of a delay.
*/

a = Drums('x*o*x*o-')
a.pitch = Mouse.Y

b = FM({ attack: ms(1) })
b.index = a.out
b.cmRatio = Mouse.X

b.fx.add(
  Delay({
    time:     Mouse.X,
    feedback: Mouse.Y
  })
)

b.note.seq( 
  ['c2','c2','c2','c3','c4'].random(),
  [1/4,1/8,1/16].random(1/16,2) 
)