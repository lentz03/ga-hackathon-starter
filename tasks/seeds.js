const mongoose = require('mongoose');
const Heroes = require('../models/Heroes.js');

mongoose.connect("mongodb://localhost:27017/test");
mongoose.connection.on('error', () => {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

  var abaddon = new Heroes({
    file: "/assets/media/heroes/large/abaddon.jpg",
    name: 'Abbadon',
    content: [{
      tips: ['You can deny yourself using Mist Coil.', 'The self-damage on Mist Coil can be absorbed by Aphotic Shield and can heal you during Borrowed Time.', 'Mist Coil can heal through BKB/spell immunity.', 'You can put Aphotic Shield on siege creeps.', 'Aphotic Shield will always detonate for the full damage regardless of damage absorbed. This means that you can replace a shield on an ally to detonate it on demand for the damage.', "Aphotic Shield's explosion won't damage units in fog or invisible units, even if they're in the AoE.", 'Curse of Avernus works on towers.', "Aphotic Shield doesn't absorb any damage during Borrowed Time, all of it goes to healing." ],
      counter: ['The burst damage radius on Aphotic Shield is pretty huge (675).', 'If you have a nuke that does >400 damage, you can instakill Abaddon without Borrowed Time ever autotriggering.', "AA's Ice Blast prevents Abaddon from healing during Borrowed Time.",
      "If you don't trust your team, Eul's is a great Abaddon counter since it can waste 2.5s of Borrowed", "If a target with Aphotic Shield is trying to explode on you, try to abuse fog of war. If the enemy can't see you, the Shield detonation won't do any damage."]
    }]
  });
abaddon.save(function(err, Abaddon){
  if (err) {
    console.log(err);
  }
  console.log(Abaddon);
});

var sven = new Heroes({
    file: "/assets/media/heroes/large/sven.jpg",
    name: 'Sven',
    content: [{
      tips: ["Warcry is a very potent pushing skill. The armor buff applies to all allied units in the AoE, including summons. Even if you're not pushing, you can use it on your creep wave as it passes the river to get some extra tower damage or to make it harder for the enemy to last hit.", "Warcry is a very potent chasing skill. The 12% move speed buff is almost another pair of brown Boots' worth of MS. Take a level of this early on.", "Warcry is a very potent team fighting skill. When maxed, you're giving an Assault Cuirass's's's worth of armor to everyone on your team for 7 seconds.", "God's Strength multiplies Sven's primary attribute damage. Meaning, when you go full WOLOLO, your STR is getting multiplied, but items that are adding green + damage (raw damage items) aren't get multiplied.", "BKB is also necessary to serve as the can opener for the whoop ass you deliver with God's Strength. Time spent disabled is time spent not smashing everything in your path." ],
      counter: ['You can disjoint Storm Hammer. If the primary target of the stun disjoints it, nothing in the AoE will get stunned.', "Sven relies on being able to kill you before you kill him. He's a STR hero, but he's often built like a plexiglass cannon. In team fights, he should pretty much always be the top priority if he's the carry."]
    }]
  });
sven.save(function(err, Sven){
  if (err) {
    console.log(err);
  }
  console.log(Sven);
});

var tusk = new Heroes({
    file: "/assets/media/heroes/large/tusk.jpg",
    name: 'Tusk',
    content: [{
      tips: ["Ice Shards has beastly range, but the projectile travels pretty slow. If you're going for a long range Shard, try to save it for when the enemy is moving into a chokepoint or just block the choke in advance.", "The Ice Shards projectile provides flying vision as it travels. The vision remains for 2 seconds once they reach their destination.", "Thus, you can use the Shards to help get vision of a neutral creep in the jungle to Snowball to if you're getting ganked and there are no good targets nearby.", "You, and anyone else in you wrap up, are completely invulnerable when rolling in a Snowball. This means that you can use this as a poor man's banish to protect allies if they're about to get killed.", "You can cast Shards and Sigil while you're in the Snowball.", "You can pick up new heroes while you're rolling mid-Snowball.", "The Sigil gives flying vision. Just don't feed it, because it's worth a fair amount of gold." ],
      counter: ["Ice Shards is dangerous in lane because of how it affects pathing. You need to add some extra space in your safe zone to compensate for it. The distance you have to move to walk out of the Shards doesn't seem like much, but you set yourself up for skillshot disables or free harass.", "Tusk and all his allies are invincible in his Snowball, so don't cast your spells until the ball breaks apart."]
    }]
  });
tusk.save(function(err, Tusk){
  if (err) {
    console.log(err);
  }
  console.log(Tusk);
});