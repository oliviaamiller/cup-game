## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


CUP GAME PLAN:

HTML elements:
1)  3 divs cups
  - why? to show users an image of the cup
  - how? imgs 

2)  2 images for cups, one for empty cups, one for cup lifted with ball
  - why? to show which cup has the ball and which doesn't 
  - how? imgs

3) 3 buttons for each cup
  - why? so the user can select a cup
  - how? add buttons

4) 3 divs for wins, loss, total
  - why? to display current state to the user
  - how? text


JS events
1) reset images of cups with each gameplay
2) addEventListener 'click' for each button
3) increment total attempts
4) use math.random to decide which cup is correct
5) compare clicked cup to what user clicked
6) increment wins
7) change image of correct cup
8) change numbers of win, loss, and total 
 