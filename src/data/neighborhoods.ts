export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "genesee-street-hill",
    "name": "Genesee Street Hill",
    "h1": "Hydro Jetting in Genesee Street Hill, Fayetteville NY",
    "title": "Hydro Jetting in Genesee Street Hill, Fayetteville | Fayetteville Hydro Jetting Pros",
    "description": "Hydro jetting on Fayetteville's Genesee Street Hill, NY: how Greek Revival homes in a historic district shape drain line questions. Call (877) 761-0283.",
    "intro": "The village historian identifies Greek Revival homes on Genesee Street Hill as part of the Fayetteville Historic District. A historic house may contain newer sewer work, so establish pipe material and condition from records and inspection.",
    "heroPs": [
      "Historic homes on Genesee Street Hill can develop slow drains from grease, scale or roots, and many carry newer sewer work inside an older structure. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Share any repair records you have and let the camera, not the age of the house, decide."
    ],
    "bodyH2": "Hydro Jetting for Genesee Street Hill Properties",
    "bodyPs": [
      "The village historian identifies Greek Revival homes on Genesee Street Hill as part of the Fayetteville Historic District. Homes of that style are old by any standard, and few have kept the plumbing they were built with.",
      "A historic house often holds a layered plumbing history. The main lateral may have been replaced in one decade, a bathroom added in another, and a kitchen rerouted in a third. The age of the structure tells you very little about the age or material of the line beneath it.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. For a historic home, the inspection comes first, and a weakened or cracked section may need repair before it needs cleaning."
    ],
    "considerations": [
      "Records of past plumbing repairs, replacements or additions",
      "What the line is made of and where materials change",
      "Mature trees along the path of the lateral",
      "Where the cleanout is and whether it has been covered",
      "Whether planned work touches the exterior of a historic property",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in Genesee Street Hill",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Historic kitchens used for generations can carry a hardened grease layer.",
      "tree-root-intrusions": "Large old trees are typical on historic lots, and their roots can reach aged joints.",
      "recurring-clogs-and-slow-drains": "A line with mixed sections can hold residue where materials change.",
      "mineral-and-scale-deposits": "Scale can build in older pipe over many decades.",
      "preventative-maintenance": "An inspection before a problem appears helps decide what an old house needs."
    },
    "appsH2": "Hydro Jetting Situations in a Historic District",
    "apps": [
      {
        "h": "Newer sewer work in an old house",
        "ps": [
          "Many historic homes have had their laterals replaced. Share what you know, because it changes where the camera should look and how to clean."
        ]
      },
      {
        "h": "Big old trees and aged joints",
        "ps": [
          "Mature trees are part of the setting, and their roots can reach older joints. Jetting clears roots from a sound line and the camera shows the entry point."
        ]
      },
      {
        "h": "Additions and remodeled kitchens",
        "ps": [
          "A kitchen or bath added in a later era often connects to the older line awkwardly. The camera shows the joint."
        ]
      },
      {
        "h": "Planned cleaning for an old line",
        "ps": [
          "A line with a history of backups benefits from planned cleaning after an inspection."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Genesee Street Hill",
    "implPs": [
      "A historic district adds care to every step. The house and the pipe each have their own history, and neither is assumed.",
      "These are the points that shape the work on Genesee Street Hill."
    ],
    "impl": [
      {
        "h": "House age is not pipe age",
        "ps": [
          "A Greek Revival home can have a modern lateral, or an original one, or both."
        ],
        "bullets": [
          "Gather any repair records",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Historic district considerations",
        "ps": [
          "Exterior changes to a historic property may be reviewed locally."
        ],
        "bullets": [
          "Ask the village before planning exterior work",
          "Tell the crew if the property is in the district"
        ]
      },
      {
        "h": "Access in an older house",
        "ps": [
          "Cleanouts can be hidden after decades of changes."
        ],
        "bullets": [
          "Locate it ahead of the visit",
          "Mention remodels that may have covered it"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Genesee Street Hill",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Gather records and locate the cleanout",
        "d": "Collect any plumbing records, and find the access point."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Genesee Street Hill, Fayetteville NY",
    "mapIntro": "Fayetteville Hydro Jetting Pros takes requests in Genesee Street Hill and across Fayetteville. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Genesee St, Fayetteville, NY",
    "mapTitle": "Map of Genesee Street Hill, Fayetteville, NY",
    "nearbyH2": "Serving Genesee Street Hill and Nearby Fayetteville Neighborhoods",
    "nearbyP": "Fayetteville Hydro Jetting Pros serves Genesee Street Hill and the rest of Fayetteville, including Limestone Creek village area. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Genesee Street Hill",
    "faqs": [
      {
        "q": "Is my home in the Fayetteville Historic District?",
        "a": "The village can confirm it. If it is, ask whether planned exterior work needs review."
      },
      {
        "q": "Does a Greek Revival house mean old plumbing?",
        "a": "Not necessarily. Many historic homes carry newer sewer work, so the line's material and condition come from records and an inspection."
      },
      {
        "q": "Is high pressure risky in an old house?",
        "a": "If the pipe is cracked or weak, it can be. That is why the camera comes first."
      },
      {
        "q": "Can roots from old trees clog my line?",
        "a": "Yes, if they have entered a joint. The camera can confirm it, and jetting can clear them from a sound pipe."
      },
      {
        "q": "Does cleaning fix a damaged pipe?",
        "a": "No. It clears an obstruction. Damage needs a repair assessment."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Genesee Street Hill Hydro Jetting Project With Fayetteville Hydro Jetting Pros",
    "ctaPs": [
      "A historic house layers decades of plumbing under one roof, and an inspection is how you learn what the layers are. A clear account of the symptoms gets that inspection started.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  },
  {
    "slug": "limestone-creek",
    "name": "Limestone Creek village area",
    "h1": "Hydro Jetting in Limestone Creek village area, Fayetteville NY",
    "title": "Hydro Jetting in Limestone Creek village area, Fayetteville | Fayetteville Hydro Jetting Pros",
    "description": "Hydro jetting in Fayetteville's Limestone Creek village area, NY: how creek-side history shapes drain questions and how cleaning gets planned. Call (877) 761-0283.",
    "intro": "The village historian documents early industries powered by Limestone Creek and the Ledyard Dyke after 1845. Creek proximity does not identify a blockage or show whether a property uses a public sewer connection.",
    "heroPs": [
      "Properties in the Limestone Creek village area can develop slow drains from grease, scale or roots, and a creekside setting raises questions that an inspection can answer. Hydro jetting can clear buildup from a sound line when the camera shows it fits. Confirm how your property connects to the sewer and describe which fixtures are affected."
    ],
    "bodyH2": "Hydro Jetting for Limestone Creek village area Properties",
    "bodyPs": [
      "The village historian documents early industries powered by Limestone Creek and the Ledyard Dyke after 1845. The creek shaped how the village grew, and older buildings and lots cluster around it.",
      "A creek-side setting raises natural questions. Is groundwater entering the line? Are roots worse near the water? Does the property even use a public sewer? Proximity to the creek answers none of those. An inspection and a look at property records do.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. It clears an obstruction and does not repair damage, so the inspection should tell you which situation you are in."
    ],
    "considerations": [
      "Whether the property uses a public sewer connection",
      "Which fixtures are slow and whether weather changes the pattern",
      "Trees near the path of the lateral",
      "Where the cleanout is and how easy it is to reach",
      "Any past cleanings, repairs or replaced sections",
      "Whether the problem sits in the private line or the public system"
    ],
    "svcH2": "Hydro Jetting Services in Limestone Creek village area",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "Kitchen grease hardens in a line anywhere, creekside or not.",
      "tree-root-intrusions": "Roots seek moisture, and a lot near a creek may have mature trees by the line.",
      "recurring-clogs-and-slow-drains": "A line that keeps slowing needs a diagnosis.",
      "mineral-and-scale-deposits": "Scale narrows a line gradually, and builds at joints.",
      "preventative-maintenance": "A planned cleaning after an inspection can catch a buildup early."
    },
    "appsH2": "Hydro Jetting Situations Near the Creek",
    "apps": [
      {
        "h": "Confirming sewer service first",
        "ps": [
          "A request starts better when the property's connection is known. If the home is not on a public sewer, jetting a sewer line is not the right tool."
        ]
      },
      {
        "h": "Wet-weather patterns",
        "ps": [
          "If drains slow after heavy rain, mention it. It can point toward groundwater or a joint problem as well as a clog."
        ]
      },
      {
        "h": "Roots near water",
        "ps": [
          "Moisture draws roots toward lines. Jetting can clear roots from a sound pipe, and the camera shows whether the entry point needs repair."
        ]
      },
      {
        "h": "A line with a history of backups",
        "ps": [
          "A line that has backed up before will likely do so again. Planned cleaning after an inspection beats an emergency."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Limestone Creek village area",
    "implPs": [
      "Creek-side properties carry a few extra questions, and each has a practical answer that starts with looking at the line.",
      "These are the points that shape the work in the Limestone Creek village area."
    ],
    "impl": [
      {
        "h": "Know your connection",
        "ps": [
          "Settle whether the property uses a public sewer before arranging cleaning."
        ],
        "bullets": [
          "Check records or ask the village",
          "Tell the crew what you find"
        ]
      },
      {
        "h": "Weather and symptoms",
        "ps": [
          "Notes on when drains slow help the inspection find the real cause."
        ],
        "bullets": [
          "Record when symptoms occur",
          "Mention heavy rain or high creek levels"
        ]
      },
      {
        "h": "Cleaning versus repair",
        "ps": [
          "Clearing a line does not mend a crack or a shifted joint."
        ],
        "bullets": [
          "Ask to see the camera findings",
          "Plan for a repair assessment if advised"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Limestone Creek village area",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Confirm the connection",
        "d": "Check whether the property uses a public sewer, and find the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Limestone Creek village area, Fayetteville NY",
    "mapIntro": "Fayetteville Hydro Jetting Pros takes requests in Limestone Creek village area and across Fayetteville. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Limestone Creek, Fayetteville, NY",
    "mapTitle": "Map of Limestone Creek village area, Fayetteville, NY",
    "nearbyH2": "Serving Limestone Creek village area and Nearby Fayetteville Neighborhoods",
    "nearbyP": "Fayetteville Hydro Jetting Pros serves Limestone Creek village area and the rest of Fayetteville, including Genesee Street Hill. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Limestone Creek village area",
    "faqs": [
      {
        "q": "Does living near the creek mean my line is damaged?",
        "a": "No. Proximity to the creek is context. An inspection is the only way to know the line's condition."
      },
      {
        "q": "How do I know whether I am on a public sewer?",
        "a": "Check records or ask the village. A crew can also help identify it during an inspection."
      },
      {
        "q": "Why do my drains slow after rain?",
        "a": "It can point to groundwater entering the line, or to a blockage that shows up when flows rise. Tell the crew when it happens."
      },
      {
        "q": "Can hydro jetting remove roots?",
        "a": "On a sound pipe, yes. The entry point may still need repair."
      },
      {
        "q": "Is jetting right for every home near the creek?",
        "a": "No. The crew should check the line first and tell you whether the method fits."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Limestone Creek village area Hydro Jetting Project With Fayetteville Hydro Jetting Pros",
    "ctaPs": [
      "A creekside setting makes people assume the worst about a line, and the facts are usually simpler. A clear account of the symptoms gets the inspection pointed in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what you are seeing."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
