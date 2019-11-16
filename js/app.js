const cbs = [
  {
    heada: 'Get Social',
    firstTags: true,
    tags: ['#sleepythecreator', '#sanctuaryluv', '#alians']
  },
  {
    heada: 'locations',
    firstTags: true,
    tags: [
      '#vancouver',
      '#yvr',
      '#bc',
      '#alberta',
      '#canada',
      '#musicfest',
      '#victoriamusicscene',
      '#victoria',
      '#yyj',
      '#shambhala'
    ]
  },
  {
    heada: 'genres',
    tags: [
      '#halftime',
      '#turtablism',
      '#vibes',
      '#beats',
      '#VariousArtists',
      '#BassMusic',
      '#Abstract',
      '#FutureBeats',
      '#Dubstep',
      '#Dnb',
      '#Neuro',
      '#leftfield'
    ]
  },
  {
    heada: 'production and performance',
    tags: [
      '#ableton',
      '#abletonlive',
      '#abletontraining',
      '#creativespace',
      '#ableton101',
      '#abletonlover',
      '#bassmusicproducer',
      '#beats',
      '#electronicmusicproducer ',
      '#musicproducerlife',
      '#mixengineer',
      '#producer',
      '#producerlife',
      '#studio',
      '#beatmaker',
      '#musicalfreedom',
      '#musicproduction',
      '#daintree',
      '#audioengineering',
      '#studiovibes',
      '#newbeats',
      '#djlife',
      '#djset',
      '#dj'
    ]
  },
  {
    heada: 'musician',
    tags: [
      '#electronicmusicculture',
      '#electronicmusician',
      '#sound',
      '#boogie',
      '#music',
      '#bassmusic',
      '#pksound',
      '#turtablism',
      '#vibes',
      '#moonmusic',
      '#love',
      '#beats',
      '#freemusic',
      '#freebeats',
      '#upcomingartists',
      '#djlifestyle',
      '#musicproducerlife',
      '#musicproducergrind',
      '#mixingengineer',
      '#undergroundartist',
      '#independentartist',
      '#upandup',
      '#musicalfreedom',
      '#daintree',
      '#daintreesound',
      '#pressplay',
      '#experimentalmusic',
      '#ambience'
    ]
  },
  {
    heada: 'Other Tags',
    tags: [
      '#Whooaahaawuw',
      '#flow',
      '#vibe',
      '#imagination',
      '#dance',
      '#psychedelic',
      '#freeimagination',
      '#youknowwhoyouare',
      '#creative',
      '#upandup',
      '#hippielife',
      '#progress',
      '#vibes',
      '#vancouverartist',
      '#hisimagination',
      '#undergroundartist',
      '#boogie',
      '#galaxy',
      '#sparkvitality',
      '#healthylifestyle',
      '#selfgrowth',
      '#celebration',
      '#party',
      '#euphoria',
      '#physicalhealth',
      '#rave',
      '#highonlife',
      '#yogamusic',
      '#play',
      '#playfulness',
      '#danceparty',
      '#woofers',
      '#mylife'
    ]
  }
];

//

//

const createElementFromHTML = htmlString => {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
};

// add checkboxes to page
const $checkboxes = document.getElementById('checkboxes');

const appendCheckbox = tag =>
  $checkboxes.append(
    createElementFromHTML(
      `<div><input class="tag-cb" type="checkbox" name="${tag}" value="${tag}">${tag}</div>`
    )
  );

cbs.forEach(({ heada, tags }) => {
  $checkboxes.append(createElementFromHTML(`<h3>${heada}</h3>`));
  tags.forEach(tag => appendCheckbox(tag));
});

//

//

// copying logic..

const copyToClipboard = text => {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  var result = document.execCommand('copy');
  document.body.removeChild(textarea);
  return result;
};

const shuffle = array => {
  // this is probably really cool, from stack overflow
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const genCheckedTagsList = () => {
  const firstTagList = [];
  const tagList = [];
  const MAX_TAGS = 27;
  document.querySelectorAll('.tag-cb').forEach(({ checked, value }) => {
    const firstOfAllList = cbs.find(({ firstTags }) => firstTags).tags;
    if (checked && firstOfAllList.includes(value)) {
      firstTagList.push(value);
      return;
    }
    if (checked) {
      tagList.push(value);
    }
  });
  // prevent duplicates
  return Array.from(new Set(firstTagList.concat(shuffle(tagList)).slice(0, MAX_TAGS + 1)));
};

const generateTagsStr = () => {
  const checkedTags = genCheckedTagsList();
  return `. \r\n. \r\n. \r\n. \r\n${checkedTags.join(' . ')}`;
};

const handleBBBClick = () => {
  copyToClipboard(generateTagsStr());
};

document.getElementById('bbb').addEventListener('click', handleBBBClick);
