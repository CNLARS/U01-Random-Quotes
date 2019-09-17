/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
{ quote: '“LESSON ONE: DITCH THE DREAM. BE A DOER, NOT A DREAMER.”',
  source: 'Shonda Rhimes',
  citation: '‘Year of Yes: How to Dance It Out, Stand In the Sun and Be Your Own Person’',
  year: 2015
},

{ quote: '“Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.”',
  source: 'Oprah Winfrey',
  citation: 'BrainyQuote',
  year: 'Unknown'
},

{ quote: '“Being aware of your crap, and actually overcoming your crap are two very different things.”',
  source: 'Christina Yang',
  citation: "Grey's Anatomy",
  year: 2007
},

{ quote: '“We can push ourselves further. We always have more to give.”',
  source: 'Simone Biles',
  citation: 'Huffington Post (UK) 8 Quotes That Prove Olympic Gymnast Simone Biles Is A Total Badass',
  year: 2016
},

{ quote: '"The only thing that separates women of color from anyone else is opportunity."',
  source: 'Viola Davis',
  citation: 'Time Magazine',
  year: 2015
},

{ quote: '“Believe in yourself. Not in the you who believes in me. Not the me who believes in you. Believe in the you who believes in yourself.”',
  source: 'Kamina',
  citation: 'Gurren Lagann',
  year: 2007
},

{ quote: '“There are millions of possibilities for the future! But it’s up to you to choose which becomes reality.”',
  source: 'Garnet',
  citation: 'Steven Universe',
  year: 2015
},

{ quote: '“I really think a champion is defined not by their wins, but by how they can recover when they fall.”',
  source: 'Serena Williams',
  citation: 'Time Magazine: 8 Serena Williams Quotes That Deserve Their Own Trophies',
  year: 2016
},

{ quote: '“Always stay true to yourself and never let what somebody says distract you from your goals.”',
  source: 'Michelle Obama',
  citation: '“Michelle Obama: In Her Own Words”',
  year: 2009
},

{ quote: '“If you\'re walking down the right path and you\'re willing to keep walking, eventually you\'ll make progress.”',
  source: 'President Barack Obama',
  citation: 'The Best Barack Obama Quotes on the President’s 55th Birthday',
  year: 2008
},


{ quote: '“I’m tryna learn something new. I’m tryna surround myself with people that inspire me or at least inquire similar desires.”',
  source: 'Kendrick Lamar',
  citation: 'Everyday Power: 50 Kendrick Lamar Quotes That Will Uplift and Inspire',
  year: 'Unknown'
},

{ quote: '“Sharing tea with a fascinating stranger is one of life’s true delights.”',
  source: 'Iroh',
  citation: 'Avatar the Last Airbender',
  year: 2006
},

{ quote: '“Nothing will work unless you do.”',
  source: 'Maya Angelou',
  citation: 'Maya Angelou Quotes: 15 of the Best',
  year: 'Unknown'
},

{ quote: '“Confused? At a loss for what to do? Wow, sounds like you\'re human. Good Luck.”',
  source: '@NightValeRadio',
  citation: 'Night Vale podcast',
  year: 2013
},

{ quote: '“I love you 3000.”',
  source: 'Tony Stark',
  citation: 'Avengers: Endgame',
  year: 2019
}
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote()
{
  var randoNum = Math.floor(Math.random() * (quotes.length) );
  return quotes [randoNum];
}
console.log(getRandomQuote());


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string:

     <p class="quote"> [quote here] </p>
     <p class="source"> [source here]
       <span class="citation"> [citation here] </span>
       <span class="year"> [year here] </span>
     </p>

   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote()
{ var printPress = getRandomQuote();
  var htmlString = '#';

  htmlString += '<p class="quote">' + quotes.quote + '</p>';
  htmlString += '<p class="source">' + quotes.source;
  htmlString += '<span class="citation">' + quotes.citation + '</span>';
  htmlString += '<span class="year">' + quotes.year + '</span>';
  htmlString += '</p>';

  return printPress;
}

console.log(printQuote());


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.