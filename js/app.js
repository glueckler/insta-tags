const musicTags = [
    "#ableton",
    "#abletonlive",
    "#abletontraining",
    "#ableton101",
    "#abletonlover",
    "#electronicmusicculture",
    "#electronicmusicfestival",
    "#electronicmusicproducer ",
    "#electronicmusician",
    "#abletonlive",
    "#sound",
    "#boogie",
    "#music",
    "#bassmusic",
    "#bassmusicproducer",
    "#pksound",
    "#halftime",
    "#turtablism",
    "#vibes",
    "#musicfest",
    "#moonmusic",
    "#love",
    "#beats",
    "#freemusic",
    "#freebass",
    "#freebeats",
    "#freebeat",
    "#sendbeats",
    "#beatsale",
    "#draketypebeat",
    "#upcomingartists",
    "#djlife",
    "#djset",
    "#djlifestyle",
    "#musicproducerlife",
    "#musicproducergrind",
    "#mixingengineer",
    "#undergroundartist",
    "#independentartist",
    "#upandup",
    "#seekjoy",
    "#spotify",
    "#producer",
    "#dj",
    "#studio",
    "#beatmaker",
    "#musicalfreedom",
    "#musicproduction",
    "#daintree",
    "#daintreesound",
    "#pressplay",
    "#experimentalmusic",
    "#ambience",
    "#audioengineering",
    "#audioengineer",
    "#audioengineering",
    "#studiovibes",
    "#newbeats",
];

const generalTags = [
    "#Whooaahaawuw",
    "#bc",
    "#alberta",
    "#imagination",
    "#dance",
    "#psychedelic",
    "#psychedelicart",
    "#freeimagination",
    "#youknowwhoyouare",
    "#creative",
    "#producerlife",
    "#upandup",
    "#hippielife",
    "#progress",
    "#vibes",
    "#vancouverartist",
    "#hisimagination",
    "#undergroundartist",
    "#boogie",
    "#galaxy",
    "#sparkvitality",
    "#healthylifestyle",
    "#selfgrowth",
    "#celebration",
    "#itsacelebration",
    "#party",
    "#euphoria",
    "#physicalhealth",
    "#partytime",
    "#rave",
    "#highonlife",
    "#daybreaker",
    "#yogamusic",
    "#play",
    "#playfulness",
    "#happiness",
    "#disinhibited ",
    "#danceparty",
    "#woofers",
    "#mylife",
    "#flow",
    "#vibe"
];

const visualArtTags = [
    "#computerart",
    "#digitalarts",
    "#digitaldesign",
    "#digitalabstractartist",
    "#shapeart",
    "#phoneart",
    "#abstractart"
];

const copyToClipboard = text => {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    var result = document.execCommand('copy');
    document.body.removeChild(textarea)
    return result;
};

const generateTagsStr = () => {
    // concat the music and general tags together
    const allTags = musicTags.concat(generalTags);

    // build random array of length
    const NUM_TAGS = 28;
    const tags = ["#hisimagination", "#slzpyboi"];
    const ranTag = () => allTags[Math.trunc(Math.random() * allTags.length)];
    for (let i = 0; i <= NUM_TAGS; i++) {
        let isNew = false;
        let tag;
        while (!isNew) {
            tag = ranTag();
            isNew = !tags.includes(tag)
        }
        tags.push(tag)
    }
    return `. \r\n. \r\n. \r\n. \r\n${tags.join(' . ')}`;
};

const handleBBBClick = () => {
    copyToClipboard(generateTagsStr())
};

document.getElementById('bbb').addEventListener('click', handleBBBClick)
