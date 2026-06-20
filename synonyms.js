const SYNONYMS = [
  {
    "word": "Abash",
    "synonym": "Disconcert, rattle",
    "antonym": "Uphold, Discompose"
  },
  {
    "word": "Abate",
    "synonym": "Moderate, decrease",
    "antonym": "Aggravate"
  },
  {
    "word": "Aberrant",
    "synonym": "Abnormal, Deviant",
    "antonym": "Normal, Typical"
  },
  {
    "word": "Abeyance",
    "synonym": "Suspension, Dormancy",
    "antonym": "Continuation, Activity"
  },
  {
    "word": "Abject",
    "synonym": "Despicable, servile",
    "antonym": "Commendable, Praiseworthy"
  },
  {
    "word": "Abjure",
    "synonym": "Forsake, renounce",
    "antonym": "Approve, Sanction"
  },
  {
    "word": "Abolish",
    "synonym": "Abrogate, annul",
    "antonym": "Setup, establish"
  },
  {
    "word": "Abortive",
    "synonym": "Vain, unproductive",
    "antonym": "Productive"
  },
  {
    "word": "Abound",
    "synonym": "Flourish, proliferate",
    "antonym": "Deficient, Destitute"
  },
  {
    "word": "Abscond",
    "synonym": "Flee, Escape",
    "antonym": "Stay, Remain"
  },
  {
    "word": "Absolve",
    "synonym": "Pardon, forgive",
    "antonym": "Compel, Accuse"
  },
  {
    "word": "Abstemious",
    "synonym": "Temperate, Moderate",
    "antonym": "Gluttonous, Indulgent"
  },
  {
    "word": "Accord",
    "synonym": "Agreement, harmony",
    "antonym": "Discord"
  },
  {
    "word": "Acrimony",
    "synonym": "Harshness, bitterness",
    "antonym": "Courtesy, Benevolence"
  },
  {
    "word": "Acumen",
    "synonym": "Awareness, brilliance",
    "antonym": "Stupidity, ignorance"
  },
  {
    "word": "Adamant",
    "synonym": "Stubborn, inflexible",
    "antonym": "Flexible, Soft"
  },
  {
    "word": "Adhere",
    "synonym": "Comply, observe",
    "antonym": "Condemn, disjoin"
  },
  {
    "word": "Adherent",
    "synonym": "Follower, disciple",
    "antonym": "Rival, Adversary"
  },
  {
    "word": "Adjunct",
    "synonym": "Joined, Added",
    "antonym": "Separated, Subtracted"
  },
  {
    "word": "Admonish",
    "synonym": "Counsel, reprove",
    "antonym": "Approve, Applaud"
  },
  {
    "word": "Adulterate",
    "synonym": "Contaminate, Corrupt",
    "antonym": "Purify, Cleanse"
  },
  {
    "word": "Adversity",
    "synonym": "Misfortune, calamity",
    "antonym": "Prosperity, Fortune"
  },
  {
    "word": "Aesthetic",
    "synonym": "Artistic, Beautiful",
    "antonym": "Ugly, Unattractive"
  },
  {
    "word": "Aggregate",
    "synonym": "Total, Accumulate",
    "antonym": "Individual, Part"
  },
  {
    "word": "Alacrity",
    "synonym": "Eagerness, Enthusiasm",
    "antonym": "Apathy, Reluctance"
  },
  {
    "word": "Alien",
    "synonym": "Foreigner, outsider",
    "antonym": "Native, Resident"
  },
  {
    "word": "Allay",
    "synonym": "Pacify, soothe",
    "antonym": "Aggravate, Excite"
  },
  {
    "word": "Alleviate",
    "synonym": "Abate, relieve",
    "antonym": "Aggravate, Enhance"
  },
  {
    "word": "Allure",
    "synonym": "Entice, fascinate",
    "antonym": "Repulse, Repel"
  },
  {
    "word": "Amalgamate",
    "synonym": "Combine, Merge",
    "antonym": "Separate, Divide"
  },
  {
    "word": "Ambiguous",
    "synonym": "Vague, Uncertain",
    "antonym": "Clear, Definite"
  },
  {
    "word": "Ambivalence",
    "synonym": "Conflicting, Mixed feelings",
    "antonym": "Certainty, Commitment"
  },
  {
    "word": "Amplify",
    "synonym": "Augment, deepen",
    "antonym": "Lessen, Contract"
  },
  {
    "word": "Anachronism",
    "synonym": "Misplacement, Antiquity",
    "antonym": "Timeliness, Modernity"
  },
  {
    "word": "Analogous",
    "synonym": "Comparable, Similar",
    "antonym": "Different, Dissimilar"
  },
  {
    "word": "Anarchy",
    "synonym": "Chaos, Disorder",
    "antonym": "Order, Government"
  },
  {
    "word": "Anomalous",
    "synonym": "Irregular, Abnormal",
    "antonym": "Normal, Regular"
  },
  {
    "word": "Antipathy",
    "synonym": "Hostility, Aversion",
    "antonym": "Affection, Sympathy"
  },
  {
    "word": "Apathy",
    "synonym": "Indifference, Unconcern",
    "antonym": "Interest, Enthusiasm"
  },
  {
    "word": "Apprise",
    "synonym": "Inform, Notify",
    "antonym": "Conceal, Withhold"
  },
  {
    "word": "Approbation",
    "synonym": "Approval, Commendation",
    "antonym": "Disapproval, Criticism"
  },
  {
    "word": "Arduous",
    "synonym": "Difficult, Strenuous",
    "antonym": "Easy, Effortless"
  },
  {
    "word": "Arraign",
    "synonym": "Incriminate, indict",
    "antonym": "Exculpate, Pardon"
  },
  {
    "word": "Artless",
    "synonym": "Naive, Natural",
    "antonym": "Cunning, Deceitful"
  },
  {
    "word": "Ascend",
    "synonym": "Climb, Escalate",
    "antonym": "Descend, Decline"
  },
  {
    "word": "Ascetic",
    "synonym": "Austere, Self-denying",
    "antonym": "Indulgent, Luxurious"
  },
  {
    "word": "Assiduous",
    "synonym": "Diligent, Hardworking",
    "antonym": "Lazy, Negligent"
  },
  {
    "word": "Attenuate",
    "synonym": "Weaken, Thin",
    "antonym": "Strengthen, Thicken"
  },
  {
    "word": "Audacity",
    "synonym": "Boldness, Courage",
    "antonym": "Mildness, Cowardice"
  },
  {
    "word": "Austere",
    "synonym": "Stern, Severe",
    "antonym": "Lavish, Luxurious"
  },
  {
    "word": "Authentic",
    "synonym": "Accurate, credible",
    "antonym": "Fictitious, unreal"
  },
  {
    "word": "Autonomous",
    "synonym": "Independent, Self-governing",
    "antonym": "Dependent, Subordinate"
  },
  {
    "word": "Awkward",
    "synonym": "Rude, blundering",
    "antonym": "Adroit, clever"
  },
  {
    "word": "Axiom",
    "synonym": "Adage, truism",
    "antonym": "Absurdity, Blunder"
  },
  {
    "word": "Baffle",
    "synonym": "Astound, Faze",
    "antonym": "Facilitate, Clarify"
  },
  {
    "word": "Banal",
    "synonym": "Trite, Commonplace",
    "antonym": "Original, Fresh"
  },
  {
    "word": "Barbarous",
    "synonym": "Frustrate, perplex",
    "antonym": "Civilized"
  },
  {
    "word": "Baroque",
    "synonym": "Florid, gilt",
    "antonym": "Plain, unadorned"
  },
  {
    "word": "Barren",
    "synonym": "Desolate, Sterile",
    "antonym": "Damp, Fertile"
  },
  {
    "word": "Barrier",
    "synonym": "Barricade, Obstacle",
    "antonym": "Link, Assistance"
  },
  {
    "word": "Base",
    "synonym": "Vulgar, Coarse",
    "antonym": "Summit, Noble"
  },
  {
    "word": "Batty",
    "synonym": "Insane, silly",
    "antonym": "Sane"
  },
  {
    "word": "Bawdy",
    "synonym": "Erotic, Coarse",
    "antonym": "Decent, Moral"
  },
  {
    "word": "Befogged",
    "synonym": "Becloud, Dim",
    "antonym": "Clear headed, Uncloud"
  },
  {
    "word": "Belie",
    "synonym": "Contradict, Disprove",
    "antonym": "Confirm, Verify"
  },
  {
    "word": "Beneficent",
    "synonym": "Generous, Charitable",
    "antonym": "Stingy, Malevolent"
  },
  {
    "word": "Benevolent",
    "synonym": "Benign, Generous",
    "antonym": "Malevolent, Miserly"
  },
  {
    "word": "Benign",
    "synonym": "Favorable, friendly",
    "antonym": "Malignant, Cruel"
  },
  {
    "word": "Bewitching",
    "synonym": "Alluring, charming",
    "antonym": "Repulsive, Repugnant"
  },
  {
    "word": "Bind",
    "synonym": "Predicament",
    "antonym": "Release"
  },
  {
    "word": "Bleak",
    "synonym": "Grim, Austere",
    "antonym": "Bright, Pleasant"
  },
  {
    "word": "Blunt",
    "synonym": "Dull, Insensitive",
    "antonym": "Keen, Sharp"
  },
  {
    "word": "Boisterous",
    "synonym": "Clamorous, rowdy",
    "antonym": "Placid, Calm"
  },
  {
    "word": "Bold",
    "synonym": "Adventurous",
    "antonym": "Timid"
  },
  {
    "word": "Bolster",
    "synonym": "Support, Reinforce",
    "antonym": "Undermine, Weaken"
  },
  {
    "word": "Bombastic",
    "synonym": "Pompous, Inflated",
    "antonym": "Modest, Humble"
  },
  {
    "word": "Boorish",
    "synonym": "Rude, Insensitive",
    "antonym": "Polite, Refined"
  },
  {
    "word": "Brittle",
    "synonym": "Breakable, crisp",
    "antonym": "Tough, Enduring"
  },
  {
    "word": "Burgeon",
    "synonym": "Flourish, Expand",
    "antonym": "Wither, Decline"
  },
  {
    "word": "Burnish",
    "synonym": "Polish, Shine",
    "antonym": "Tarnish, Dull"
  },
  {
    "word": "Bustle",
    "synonym": "Commotion, Tumult",
    "antonym": "Slowness, Quiet"
  },
  {
    "word": "Busy",
    "synonym": "Active, Engaged",
    "antonym": "Idle, Lazy"
  },
  {
    "word": "Buttress",
    "synonym": "Support, Prop",
    "antonym": "Undermine, Weaken"
  },
  {
    "word": "Calamity",
    "synonym": "adversity, misfortune",
    "antonym": "Fortune"
  },
  {
    "word": "Calculating",
    "synonym": "Canny, Devious",
    "antonym": "Artless, honest"
  },
  {
    "word": "Callous",
    "synonym": "obdurate, unfeeling",
    "antonym": "Compassionate, Tender"
  },
  {
    "word": "Calm",
    "synonym": "Harmonious, unruffled",
    "antonym": "Stormy, turbulent"
  },
  {
    "word": "Calumny",
    "synonym": "defamation, aspersion",
    "antonym": "Commendation, Praise"
  },
  {
    "word": "Camouflage",
    "synonym": "Cloak, disguise",
    "antonym": "Reveal"
  },
  {
    "word": "Candid",
    "synonym": "Blunt, bluff",
    "antonym": "Evasive"
  },
  {
    "word": "Capable",
    "synonym": "competent, able",
    "antonym": "Incompetent, Inept"
  },
  {
    "word": "Capricious",
    "synonym": "Fickle, Unpredictable",
    "antonym": "Steady, Consistent"
  },
  {
    "word": "Captivate",
    "synonym": "Charm, fascinate",
    "antonym": "Disillusion offend"
  },
  {
    "word": "Captivity",
    "synonym": "imprisonment, confinement",
    "antonym": "Freedom, Liberty"
  },
  {
    "word": "Carnal",
    "synonym": "Earthly, fleshly",
    "antonym": "Spiritual"
  },
  {
    "word": "Castigation",
    "synonym": "Punishment, Criticism",
    "antonym": "Praise, Commendation"
  },
  {
    "word": "Catalyst",
    "synonym": "Stimulus, Accelerator",
    "antonym": "Inhibitor, Hindrance"
  },
  {
    "word": "Catholic",
    "synonym": "Generic, liberal",
    "antonym": "Narrow- minded"
  },
  {
    "word": "Caustic",
    "synonym": "Corrosive, Biting",
    "antonym": "Mild, Gentle"
  },
  {
    "word": "Cease",
    "synonym": "terminate, desist",
    "antonym": "Begin, Originate"
  },
  {
    "word": "Celebrated",
    "synonym": "Acclaimed, lionized",
    "antonym": "Unknown, Inglorious"
  },
  {
    "word": "Cement",
    "synonym": "Plaster, mortar",
    "antonym": "Disintegrate"
  },
  {
    "word": "Censure",
    "synonym": "Rebuke, reprimand",
    "antonym": "Praise, Acceptance"
  },
  {
    "word": "Chaste",
    "synonym": "virtuous, pure",
    "antonym": "Sullied, Lustful"
  },
  {
    "word": "Chastise",
    "synonym": "punish, admonish",
    "antonym": "Cheer, encourage"
  },
  {
    "word": "Cheap",
    "synonym": "Competitive, Inexpensive",
    "antonym": "Dear, unreasonable"
  },
  {
    "word": "Chicanery",
    "synonym": "Deception, Trickery",
    "antonym": "Honesty, Candor"
  },
  {
    "word": "Clandestine",
    "synonym": "Covert, furtive",
    "antonym": "Open, Legal"
  },
  {
    "word": "Classic",
    "synonym": "Simple, Typical",
    "antonym": "Romantic, Unusual"
  },
  {
    "word": "Coagulate",
    "synonym": "Thicken, Clot",
    "antonym": "Liquefy, Dissolve"
  },
  {
    "word": "Coarse",
    "synonym": "Bawdy, Boorish",
    "antonym": "Fine, Chaste"
  },
  {
    "word": "Coda",
    "synonym": "Conclusion, Epilogue",
    "antonym": "Introduction, Prelude"
  },
  {
    "word": "Cogent",
    "synonym": "Convincing, Persuasive",
    "antonym": "Weak, Unconvincing"
  },
  {
    "word": "Comic",
    "synonym": "Clown, Jester",
    "antonym": "Tragic, tragedian"
  },
  {
    "word": "Commensurate",
    "synonym": "Proportionate, Equivalent",
    "antonym": "Disproportionate, Unequal"
  },
  {
    "word": "Compact",
    "synonym": "Bunched, thick",
    "antonym": "Loose, Diffuse"
  },
  {
    "word": "Compassion",
    "synonym": "kindness, sympathy",
    "antonym": "Cruelty, Barbarity"
  },
  {
    "word": "Compendium",
    "synonym": "Summary, Digest",
    "antonym": "Expansion, Enlargement"
  },
  {
    "word": "Complaisant",
    "synonym": "Obliging, Agreeable",
    "antonym": "Obstinate, Uncooperative"
  },
  {
    "word": "Compress",
    "synonym": "Abbreviate, Shrink",
    "antonym": "Amplify, Expand"
  },
  {
    "word": "Comprise",
    "synonym": "include, contain",
    "antonym": "Reject, lack"
  },
  {
    "word": "Concede",
    "synonym": "yield, permit",
    "antonym": "Deny, reject"
  },
  {
    "word": "Conceit",
    "synonym": "Egotism, Immodesty",
    "antonym": "Modesty"
  },
  {
    "word": "Conciliatory",
    "synonym": "Reconciling, Pacifying",
    "antonym": "Provocative, Antagonistic"
  },
  {
    "word": "Concord",
    "synonym": "Agreement, accord",
    "antonym": "Discord"
  },
  {
    "word": "Concur",
    "synonym": "approve, agree",
    "antonym": "Differ, disagree"
  },
  {
    "word": "Condemn",
    "synonym": "Castigate, Chide",
    "antonym": "Approve, Praise"
  },
  {
    "word": "Condone",
    "synonym": "Overlook, Excuse",
    "antonym": "Condemn, Punish"
  },
  {
    "word": "Confident",
    "synonym": "Bold, Undaunted",
    "antonym": "Diffident, cowardly"
  },
  {
    "word": "Confound",
    "synonym": "Confuse, Puzzle",
    "antonym": "Clarify, Enlighten"
  },
  {
    "word": "Connoisseur",
    "synonym": "Expert, Specialist",
    "antonym": "Novice, Amateur"
  },
  {
    "word": "Consent",
    "synonym": "agree, permit",
    "antonym": "Object, Disagree"
  },
  {
    "word": "Consequence",
    "synonym": "effect, outcome",
    "antonym": "Origin, Start"
  },
  {
    "word": "Consolidate",
    "synonym": "solidify, strengthen",
    "antonym": "Separate, Weaken"
  },
  {
    "word": "Conspicuous",
    "synonym": "prominent, obvious",
    "antonym": "Concealed, hidden"
  },
  {
    "word": "Contempt",
    "synonym": "scorn, disregard",
    "antonym": "Regard, Praise"
  },
  {
    "word": "Contention",
    "synonym": "Dispute, Argument",
    "antonym": "Agreement, Harmony"
  },
  {
    "word": "Contentious",
    "synonym": "Quarrelsome, Argumentative",
    "antonym": "Peaceful, Agreeable"
  },
  {
    "word": "Contradict",
    "synonym": "deny, oppose",
    "antonym": "Approve, Confirm"
  },
  {
    "word": "Contrary",
    "synonym": "dissimilar, conflicting",
    "antonym": "Similar, Alike"
  },
  {
    "word": "Contrite",
    "synonym": "Remorseful, Penitent",
    "antonym": "Impenitent, Unrepentant"
  },
  {
    "word": "Conundrum",
    "synonym": "Riddle, Puzzle",
    "antonym": "Solution, Clarity"
  },
  {
    "word": "Converge",
    "synonym": "Meet, Unite",
    "antonym": "Diverge, Separate"
  },
  {
    "word": "Convoluted",
    "synonym": "Complex, Intricate",
    "antonym": "Simple, Straightforward"
  },
  {
    "word": "Courtesy",
    "synonym": "Generosity, Reverence",
    "antonym": "Disdain, Rudeness"
  },
  {
    "word": "Craven",
    "synonym": "Cowardly, Timid",
    "antonym": "Brave, Valiant"
  },
  {
    "word": "Creation",
    "synonym": "Formation, foundation",
    "antonym": "Destruction"
  },
  {
    "word": "Cunning",
    "synonym": "Acute, Smart",
    "antonym": "Naive, Coarse"
  },
  {
    "word": "Daunt",
    "synonym": "Intimidate, Dismay",
    "antonym": "Encourage, Inspire"
  },
  {
    "word": "Decay",
    "synonym": "Collapse, decompose",
    "antonym": "Flourish, Progress"
  },
  {
    "word": "Deceit",
    "synonym": "deception, artifice",
    "antonym": "Veracity, Sincerity"
  },
  {
    "word": "Decipher",
    "synonym": "interpret, reveal",
    "antonym": "Misinterpret, distort"
  },
  {
    "word": "Decorum",
    "synonym": "Propriety, Etiquette",
    "antonym": "Impropriety, Rudeness"
  },
  {
    "word": "Deference",
    "synonym": "Respect, Submission",
    "antonym": "Disrespect, Defiance"
  },
  {
    "word": "Defile",
    "synonym": "contaminate, pollute",
    "antonym": "Purify, sanctity"
  },
  {
    "word": "Defray",
    "synonym": "spend, pay",
    "antonym": "Disclaim, Repudiate"
  },
  {
    "word": "Deliberate",
    "synonym": "cautious, intentional",
    "antonym": "Rash, Sudden"
  },
  {
    "word": "Delineate",
    "synonym": "Portray, Describe",
    "antonym": "Misrepresent, Distort"
  },
  {
    "word": "Demolish",
    "synonym": "Ruin, devastate",
    "antonym": "Repair, construct"
  },
  {
    "word": "Denigrate",
    "synonym": "Belittle, Defame",
    "antonym": "Praise, Commend"
  },
  {
    "word": "Denounce",
    "synonym": "Blame, boycott",
    "antonym": "Defend"
  },
  {
    "word": "Dense",
    "synonym": "Opaque, piled",
    "antonym": "Sparse, brainy"
  },
  {
    "word": "Deprive",
    "synonym": "despoil, divest",
    "antonym": "Restore, Renew"
  },
  {
    "word": "Deride",
    "synonym": "mock, taunt",
    "antonym": "Inspire, Encourage"
  },
  {
    "word": "Derivative",
    "synonym": "Unoriginal, Derived",
    "antonym": "Original, Innovative"
  },
  {
    "word": "Derogatory",
    "synonym": "Sarcastic, critical",
    "antonym": "Laudatory, appreciative"
  },
  {
    "word": "Desiccate",
    "synonym": "Dry, Dehydrate",
    "antonym": "Moisten, Hydrate"
  },
  {
    "word": "Despair",
    "synonym": "Depression, misery",
    "antonym": "Contentment, Hope"
  },
  {
    "word": "Destructive",
    "synonym": "Catastrophic, pernicious",
    "antonym": "Creative, Constructive"
  },
  {
    "word": "Desultory",
    "synonym": "Haphazard, Aimless",
    "antonym": "Systematic, Focused"
  },
  {
    "word": "Diatribe",
    "synonym": "Tirade, Denunciation",
    "antonym": "Praise, Acclaim"
  },
  {
    "word": "Dichotomy",
    "synonym": "Division, Split",
    "antonym": "Unity, Agreement"
  },
  {
    "word": "Diffidence",
    "synonym": "Shyness, Timidity",
    "antonym": "Confidence, Boldness"
  },
  {
    "word": "Diffuse",
    "synonym": "Spread, Scatter",
    "antonym": "Concentrate, Focus"
  },
  {
    "word": "Digression",
    "synonym": "Divergence, Detour",
    "antonym": "Focus, Directness"
  },
  {
    "word": "Dirge",
    "synonym": "Elegy, Lament",
    "antonym": "Celebration, Praise"
  },
  {
    "word": "Disabuse",
    "synonym": "Undecieve, Correct",
    "antonym": "Deceive, Mislead"
  },
  {
    "word": "Discerning",
    "synonym": "Perceptive, Insightful",
    "antonym": "Oblivious, Unaware"
  },
  {
    "word": "Discredit",
    "synonym": "Defame, Disgrace",
    "antonym": "Credibility, Honor"
  },
  {
    "word": "Discrepancy",
    "synonym": "Inconsistency, Difference",
    "antonym": "Consistency, Agreement"
  },
  {
    "word": "Discrete",
    "synonym": "Separate, Distinct",
    "antonym": "Connected, Joined"
  },
  {
    "word": "Disdain",
    "synonym": "detest, despise",
    "antonym": "Approve, praise"
  },
  {
    "word": "Disingenuous",
    "synonym": "Insincere, Dishonest",
    "antonym": "Sincere, Honest"
  },
  {
    "word": "Disinterested",
    "synonym": "Impartial, Unbiased",
    "antonym": "Biased, Partial"
  },
  {
    "word": "Disjointed",
    "synonym": "Incoherent, Disconnected",
    "antonym": "Coherent, Connected"
  },
  {
    "word": "Disparage",
    "synonym": "Belittle, Criticize",
    "antonym": "Praise, Commend"
  },
  {
    "word": "Disparate",
    "synonym": "Different, Dissimilar",
    "antonym": "Similar, Alike"
  },
  {
    "word": "Dissemble",
    "synonym": "Disguise, Pretend",
    "antonym": "Reveal, Disclose"
  },
  {
    "word": "Disseminate",
    "synonym": "Spread, Distribute",
    "antonym": "Suppress, Withhold"
  },
  {
    "word": "Dissolution",
    "synonym": "Disintegration, Dissolve",
    "antonym": "Formation, Unity"
  },
  {
    "word": "Dissonance",
    "synonym": "Discord, Conflict",
    "antonym": "Harmony, Accord"
  },
  {
    "word": "Dissuade",
    "synonym": "Remonstrate, Counsel",
    "antonym": "Insite, Persuade"
  },
  {
    "word": "Distend",
    "synonym": "Expand, Swell",
    "antonym": "Contract, Shrink"
  },
  {
    "word": "Distill",
    "synonym": "Purify, Extract",
    "antonym": "Contaminate, Dilute"
  },
  {
    "word": "Diverge",
    "synonym": "Separate, Branch",
    "antonym": "Converge, Meet"
  },
  {
    "word": "Divest",
    "synonym": "Strip, Deprive",
    "antonym": "Invest, Endow"
  },
  {
    "word": "Docile",
    "synonym": "Pliable, pliant",
    "antonym": "Headstrong, obstinate"
  },
  {
    "word": "Dogmatic",
    "synonym": "Opinionated, Dictatorial",
    "antonym": "Open-minded, Flexible"
  },
  {
    "word": "Dormant",
    "synonym": "Inactive, Latent",
    "antonym": "Active, Operative"
  },
  {
    "word": "Dupe",
    "synonym": "Fool, Deceive",
    "antonym": "Enlighten, Undeceive"
  },
  {
    "word": "Dwarf",
    "synonym": "Diminutive, Petite",
    "antonym": "Huge, Giant"
  },
  {
    "word": "Eager",
    "synonym": "Keen, acquisitive",
    "antonym": "Indifferent, apathetic"
  },
  {
    "word": "Ebullient",
    "synonym": "Enthusiastic, Exuberant",
    "antonym": "Apathetic, Listless"
  },
  {
    "word": "Eccentric",
    "synonym": "strange, abnormal",
    "antonym": "Natural, Conventional"
  },
  {
    "word": "Eclectic",
    "synonym": "Diverse, Varied",
    "antonym": "Uniform, Narrow"
  },
  {
    "word": "Eclipse",
    "synonym": "Diminution, Dimming",
    "antonym": "Shine, eclipse"
  },
  {
    "word": "Ecstasy",
    "synonym": "delight, exultation",
    "antonym": "Despair, Calamity"
  },
  {
    "word": "Efface",
    "synonym": "destroy, obliterate",
    "antonym": "Retain, Maintain"
  },
  {
    "word": "Efficacy",
    "synonym": "Effectiveness, Potency",
    "antonym": "Ineffectiveness, Weakness"
  },
  {
    "word": "Effrontery",
    "synonym": "Impudence, Audacity",
    "antonym": "Modesty, Timidity"
  },
  {
    "word": "Elegy",
    "synonym": "Lament, Dirge",
    "antonym": "Praise, Celebration"
  },
  {
    "word": "Elicit",
    "synonym": "Extract, Evoke",
    "antonym": "Suppress, Conceal"
  },
  {
    "word": "Eloquence",
    "synonym": "expression, fluency",
    "antonym": "Halting, Stammering"
  },
  {
    "word": "Embellish",
    "synonym": "Adorn, Decorate",
    "antonym": "Simplify, Strip"
  },
  {
    "word": "Empirical",
    "synonym": "Experimental, Observed",
    "antonym": "Theoretical, Speculative"
  },
  {
    "word": "Emulate",
    "synonym": "Imitate, Rival",
    "antonym": "Innovate, Original"
  },
  {
    "word": "Encumbrance",
    "synonym": "hindrance, obstacle",
    "antonym": "Incentive, stimulant"
  },
  {
    "word": "Endeavour",
    "synonym": "undertake, aspire",
    "antonym": "Cease, quit"
  },
  {
    "word": "Endemic",
    "synonym": "Native, Local",
    "antonym": "Foreign, Exotic"
  },
  {
    "word": "Enervate",
    "synonym": "Weaken, Exhaust",
    "antonym": "Strengthen, Energize"
  },
  {
    "word": "Engender",
    "synonym": "Produce, Generate",
    "antonym": "Prevent, Destroy"
  },
  {
    "word": "Enormous",
    "synonym": "colossal, mammoth",
    "antonym": "Diminutive, negligible"
  },
  {
    "word": "Ephemeral",
    "synonym": "Fleeting, Transient",
    "antonym": "Permanent, Enduring"
  },
  {
    "word": "Epitome",
    "synonym": "precise, example",
    "antonym": "Increment, expansion"
  },
  {
    "word": "Equanimity",
    "synonym": "Composure, Calmness",
    "antonym": "Agitation, Anxiety"
  },
  {
    "word": "Equivocal",
    "synonym": "uncertain, hazy",
    "antonym": "Obvious, lucid"
  },
  {
    "word": "Eradicate",
    "synonym": "destroy, exterminate",
    "antonym": "Secure, plant"
  },
  {
    "word": "Erudite",
    "synonym": "Learned, Scholarly",
    "antonym": "Ignorant, Uneducated"
  },
  {
    "word": "Esoteric",
    "synonym": "Obscure, Mysterious",
    "antonym": "Common, Familiar"
  },
  {
    "word": "Exacerbate",
    "synonym": "Worsen, Aggravate",
    "antonym": "Alleviate, Soothe"
  },
  {
    "word": "Exculpate",
    "synonym": "Acquit, Absolve",
    "antonym": "Condemn, Incriminate"
  },
  {
    "word": "Exigency",
    "synonym": "Urgency, Emergency",
    "antonym": "Normality, Routine"
  },
  {
    "word": "Extrapolation",
    "synonym": "Projection, Inference",
    "antonym": "Fact, Certainty"
  },
  {
    "word": "Fabricate",
    "synonym": "construct, produce",
    "antonym": "Destroy, Dismantle"
  },
  {
    "word": "Facetious",
    "synonym": "Joking, Flippant",
    "antonym": "Serious, Earnest"
  },
  {
    "word": "Fallacious",
    "synonym": "Misleading, False",
    "antonym": "Valid, True"
  },
  {
    "word": "Fallacy",
    "synonym": "delusion, mistake",
    "antonym": "Veracity, Truth"
  },
  {
    "word": "Falter",
    "synonym": "stumble, demur",
    "antonym": "Persist, Endure"
  },
  {
    "word": "Fanatical",
    "synonym": "narrow-minded, biased",
    "antonym": "Liberal, Tolerant"
  },
  {
    "word": "Fatuous",
    "synonym": "Foolish, Inane",
    "antonym": "Wise, Sensible"
  },
  {
    "word": "Fawning",
    "synonym": "Sycophantic, Flattering",
    "antonym": "Independent, Aloof"
  },
  {
    "word": "Feeble",
    "synonym": "weak, frail",
    "antonym": "Strong, Robust"
  },
  {
    "word": "Felicitous",
    "synonym": "Apt, Appropriate",
    "antonym": "Inappropriate, Unsuitable"
  },
  {
    "word": "Ferocious",
    "synonym": "cruel, fierce",
    "antonym": "Gentle, Sympathetic"
  },
  {
    "word": "Fervor",
    "synonym": "Passion, Zeal",
    "antonym": "Apathy, Indifference"
  },
  {
    "word": "Feud",
    "synonym": "strife, quarrel",
    "antonym": "Harmony, fraternity"
  },
  {
    "word": "Flag",
    "synonym": "Weaken, Droop",
    "antonym": "Strengthen, Flourish"
  },
  {
    "word": "Fledgling",
    "synonym": "Novice, Beginner",
    "antonym": "Veteran, Expert"
  },
  {
    "word": "Flout",
    "synonym": "Mock, Defy",
    "antonym": "Respect, Obey"
  },
  {
    "word": "Fluctuate",
    "synonym": "deflect, vacillate",
    "antonym": "Stabilize, resolve"
  },
  {
    "word": "Foment",
    "synonym": "Instigate, Incite",
    "antonym": "Quell, Suppress"
  },
  {
    "word": "Forestall",
    "synonym": "Preempt, Anticipate",
    "antonym": "Allow, Permit"
  },
  {
    "word": "Forsake",
    "synonym": "desert, renounce",
    "antonym": "Hold, maintain"
  },
  {
    "word": "Fragile",
    "synonym": "weak, infirm",
    "antonym": "Enduring, Tough"
  },
  {
    "word": "Frantic",
    "synonym": "violent, agitated",
    "antonym": "Subdued, gentle"
  },
  {
    "word": "Frivolous",
    "synonym": "petty, worthless",
    "antonym": "Solemn, significant"
  },
  {
    "word": "Frugality",
    "synonym": "economy, providence",
    "antonym": "Lavishness, extravagance"
  },
  {
    "word": "Gainsay",
    "synonym": "Deny, Contradict",
    "antonym": "Confirm, Affirm"
  },
  {
    "word": "Garrulous",
    "synonym": "Talkative, Loquacious",
    "antonym": "Taciturn, Reticent"
  },
  {
    "word": "Gather",
    "synonym": "Converge, huddle",
    "antonym": "Disperse, Dissemble"
  },
  {
    "word": "Generosity",
    "synonym": "Altruism, bounty",
    "antonym": "Stinginess, greed"
  },
  {
    "word": "Genuine",
    "synonym": "Absolute, Factual",
    "antonym": "Spurious"
  },
  {
    "word": "Gloom",
    "synonym": "obscurity, darkness",
    "antonym": "Delight, mirth"
  },
  {
    "word": "Gloomy",
    "synonym": "Bleak, cloudy",
    "antonym": "Gay, Bright"
  },
  {
    "word": "Glory",
    "synonym": "Dignity, renown",
    "antonym": "Shame, Disgrace"
  },
  {
    "word": "Glut",
    "synonym": "stuff, satiate",
    "antonym": "Starve, abstain"
  },
  {
    "word": "Goad",
    "synonym": "Urge, Prod",
    "antonym": "Deter, Discourage"
  },
  {
    "word": "Gorgeous",
    "synonym": "magnificent, dazzling",
    "antonym": "Dull, unpretentious"
  },
  {
    "word": "Gouge",
    "synonym": "Overcharge, Cheat",
    "antonym": "Undercharge, Fair"
  },
  {
    "word": "Gracious",
    "synonym": "courteous, beneficent",
    "antonym": "Rude, Unforgiving"
  },
  {
    "word": "Grandiloquent",
    "synonym": "Pompous, Bombastic",
    "antonym": "Simple, Humble"
  },
  {
    "word": "Gregarious",
    "synonym": "Sociable, Outgoing",
    "antonym": "Unsociable, Reserved"
  },
  {
    "word": "Grisly",
    "synonym": "disgusting, atrocious",
    "antonym": "Pleasing, attractive"
  },
  {
    "word": "Grudge",
    "synonym": "hatred, aversion",
    "antonym": "Benevolence, Affection"
  },
  {
    "word": "Guile",
    "synonym": "cunning, deceit",
    "antonym": "Honesty, frankness"
  },
  {
    "word": "Guileless",
    "synonym": "Honest, Naive",
    "antonym": "Cunning, Deceitful"
  },
  {
    "word": "Hamper",
    "synonym": "retard, prevent",
    "antonym": "Promote, facilitate"
  },
  {
    "word": "Hamstrung",
    "synonym": "Cripple, Debilitate",
    "antonym": "Strengthen, Encourage"
  },
  {
    "word": "Hapless",
    "synonym": "unfortunate, ill-fated",
    "antonym": "Fortunate, Lucky"
  },
  {
    "word": "Harangue",
    "synonym": "Tirade, Lecture",
    "antonym": "Praise, Acclaim"
  },
  {
    "word": "Harass",
    "synonym": "irritate, molest",
    "antonym": "Assist, comfort"
  },
  {
    "word": "Harmony",
    "synonym": "Conformity, Amicability",
    "antonym": "Discord, discord"
  },
  {
    "word": "Hasty",
    "synonym": "Abrupt, Impetuous",
    "antonym": "Leisurely, Cautious"
  },
  {
    "word": "Haughty",
    "synonym": "arrogant, pompous",
    "antonym": "Humble, Submissive"
  },
  {
    "word": "Hazard",
    "synonym": "Peril, danger",
    "antonym": "Conviction, security"
  },
  {
    "word": "Heretic",
    "synonym": "non-conformist, secularist",
    "antonym": "Conformable, religious"
  },
  {
    "word": "Hideous",
    "synonym": "frightful, shocking",
    "antonym": "Attractive, alluring"
  },
  {
    "word": "Homogeneous",
    "synonym": "Uniform, Similar",
    "antonym": "Heterogeneous, Diverse"
  },
  {
    "word": "Honor",
    "synonym": "Adoration, Reverence",
    "antonym": "Denunciation, Shame"
  },
  {
    "word": "Humble",
    "synonym": "Meek, Timid",
    "antonym": "Proud, Assertive"
  },
  {
    "word": "Humility",
    "synonym": "Resignation, Fawning",
    "antonym": "Boldness, Pride"
  },
  {
    "word": "Hyperbole",
    "synonym": "Exaggeration, Overstatement",
    "antonym": "Understatement, Modesty"
  },
  {
    "word": "Hypocrisy",
    "synonym": "Deception, Pharisaism",
    "antonym": "Sincerity, frankness"
  },
  {
    "word": "Iconoclastic",
    "synonym": "Rebellious, Unorthodox",
    "antonym": "Traditional, Conforming"
  },
  {
    "word": "Idolatry",
    "synonym": "Worship, Adoration",
    "antonym": "Disdain, Condemnation"
  },
  {
    "word": "Immaculate",
    "synonym": "unsullied, spotless",
    "antonym": "Defiled, Tarnished"
  },
  {
    "word": "Immense",
    "synonym": "huge, enormous",
    "antonym": "Puny, Insignificant"
  },
  {
    "word": "Immerse",
    "synonym": "submerge, involve",
    "antonym": "Emerge, uncover"
  },
  {
    "word": "Imminent",
    "synonym": "impending, brewing",
    "antonym": "Distant, Receding"
  },
  {
    "word": "Immunity",
    "synonym": "prerogative, privilege",
    "antonym": "Blame, Censure"
  },
  {
    "word": "Immutable",
    "synonym": "Unchanging, Fixed",
    "antonym": "Mutable, Changeable"
  },
  {
    "word": "Impair",
    "synonym": "diminish, deteriorate",
    "antonym": "Restore, Revive"
  },
  {
    "word": "Impartial",
    "synonym": "just, unbiased",
    "antonym": "Prejudiced, Biased"
  },
  {
    "word": "Impassive",
    "synonym": "Stoic, Unemotional",
    "antonym": "Emotional, Passionate"
  },
  {
    "word": "Impediment",
    "synonym": "hurdle, obstruction",
    "antonym": "Assistant, Concurrence"
  },
  {
    "word": "Impenitent",
    "synonym": "Uncontrite, Obdurate",
    "antonym": "Repentant"
  },
  {
    "word": "Imperturbable",
    "synonym": "Calm, Composed",
    "antonym": "Excitable, Agitated"
  },
  {
    "word": "Impervious",
    "synonym": "Impenetrable, Resistant",
    "antonym": "Vulnerable, Penetrable"
  },
  {
    "word": "Impious",
    "synonym": "irreligious, unholy",
    "antonym": "Pious, Devout"
  },
  {
    "word": "Implacable",
    "synonym": "Relentless, Unforgiving",
    "antonym": "Lenient, Merciful"
  },
  {
    "word": "Impulsive",
    "synonym": "Flaky, Impetuous",
    "antonym": "Cautious, Deliberate"
  },
  {
    "word": "Impute",
    "synonym": "attribute, ascribe",
    "antonym": "Exculpate, support"
  },
  {
    "word": "Inchoate",
    "synonym": "Rudimentary, Nascent",
    "antonym": "Developed, Mature"
  },
  {
    "word": "Inclination",
    "synonym": "disposition, affection",
    "antonym": "Indifference, Disinclination"
  },
  {
    "word": "Incompetent",
    "synonym": "inefficient, unskilled",
    "antonym": "Dexterous, Skilled"
  },
  {
    "word": "Incongruity",
    "synonym": "Inconsistency, Absurdity",
    "antonym": "Harmony, Consistency"
  },
  {
    "word": "Incongruous",
    "synonym": "inappropriate, absurd",
    "antonym": "Compatible, harmonious"
  },
  {
    "word": "Inconsequential",
    "synonym": "Insignificant, Trivial",
    "antonym": "Significant, Important"
  },
  {
    "word": "Indeterminate",
    "synonym": "Uncertain, Vague",
    "antonym": "Certain, Definite"
  },
  {
    "word": "Indifferent",
    "synonym": "Equitable, Haughty",
    "antonym": "Partial, Biased"
  },
  {
    "word": "Indigence",
    "synonym": "Poverty, Destitution",
    "antonym": "Wealth, Affluence"
  },
  {
    "word": "Indigent",
    "synonym": "Destitute, Impoverished",
    "antonym": "Rich, Affluent"
  },
  {
    "word": "Indolent",
    "synonym": "Lazy, Idle",
    "antonym": "Industrious, Diligent"
  },
  {
    "word": "Inert",
    "synonym": "Inactive, Static",
    "antonym": "Active, Dynamic"
  },
  {
    "word": "Inevitable",
    "synonym": "unavoidable, ascertained",
    "antonym": "Unlikely, Doubtful"
  },
  {
    "word": "Infernal",
    "synonym": "Damned, Accursed",
    "antonym": "Heavenly"
  },
  {
    "word": "Infringe",
    "synonym": "violate, encroach",
    "antonym": "Comply, Concur"
  },
  {
    "word": "Ingenuous",
    "synonym": "undisguised, naive",
    "antonym": "Wily, Craftly"
  },
  {
    "word": "Inherent",
    "synonym": "Intrinsic, Inborn",
    "antonym": "Acquired, External"
  },
  {
    "word": "Insensible",
    "synonym": "Unconscious, Numb",
    "antonym": "Conscious, Sensitive"
  },
  {
    "word": "Insinuate",
    "synonym": "allude, hint",
    "antonym": "Conceal, Camouflage"
  },
  {
    "word": "Insipid",
    "synonym": "Tedious, Prosaic",
    "antonym": "Pleasing, appetizing"
  },
  {
    "word": "Insolvent",
    "synonym": "indigent, destitute",
    "antonym": "Wealthy, solvent"
  },
  {
    "word": "Instill",
    "synonym": "inculcate, inject",
    "antonym": "Eradicate, extract"
  },
  {
    "word": "Insularity",
    "synonym": "Narrow-mindedness, Isolation",
    "antonym": "Cosmopolitan, Openness"
  },
  {
    "word": "Interesting",
    "synonym": "Enchanting, Riveting",
    "antonym": "Dull, Uninteresting"
  },
  {
    "word": "Intractable",
    "synonym": "Stubborn, Unmanageable",
    "antonym": "Docile, Manageable"
  },
  {
    "word": "Intransigence",
    "synonym": "Stubbornness, Inflexibility",
    "antonym": "Flexibility, Compromise"
  },
  {
    "word": "Intricate",
    "synonym": "tangled, complicated",
    "antonym": "Regulated, Orderly"
  },
  {
    "word": "Intrigue",
    "synonym": "scheme, conspiracy",
    "antonym": "Candor, Sincerity"
  },
  {
    "word": "Intrinsic",
    "synonym": "genuine, fundamental",
    "antonym": "Extraneous, incidental"
  },
  {
    "word": "Inundate",
    "synonym": "Flood, Overwhelm",
    "antonym": "Drain, Empty"
  },
  {
    "word": "Inured",
    "synonym": "Accustomed, Hardened",
    "antonym": "Sensitive, Unaccustomed"
  },
  {
    "word": "Invective",
    "synonym": "accusation, censure",
    "antonym": "Approval, acclamation"
  },
  {
    "word": "Invincible",
    "synonym": "unconquerable, impregnable",
    "antonym": "Effeminate, languid"
  },
  {
    "word": "Irascible",
    "synonym": "Irritable, Cantankerous",
    "antonym": "Affable, Good-natured"
  },
  {
    "word": "Irrepressible",
    "synonym": "irresistible, unconfined",
    "antonym": "Composed, hesitant"
  },
  {
    "word": "Irresolute",
    "synonym": "Hesitant, Wavering",
    "antonym": "Resolute, Determined"
  },
  {
    "word": "Itinerary",
    "synonym": "Schedule, Plan",
    "antonym": "Unplanned, Random"
  },
  {
    "word": "Jaded",
    "synonym": "tired, exhausted",
    "antonym": "Renewed, recreated"
  },
  {
    "word": "Jejune",
    "synonym": "dull, boring",
    "antonym": "Interesting, exciting"
  },
  {
    "word": "Jovial",
    "synonym": "frolicsome, cheerful",
    "antonym": "Solemn, morose"
  },
  {
    "word": "Jubilant",
    "synonym": "rejoicing, triumphant",
    "antonym": "Melancholy, depressing"
  },
  {
    "word": "Judicious",
    "synonym": "thoughtful, prudent",
    "antonym": "Irrational, foolish"
  },
  {
    "word": "Just",
    "synonym": "honest, impartial",
    "antonym": "Unequal, unfair"
  },
  {
    "word": "Justify",
    "synonym": "defend, exculpate",
    "antonym": "Impute, arraign"
  },
  {
    "word": "Juvenile",
    "synonym": "young, tender",
    "antonym": "Dotage, antiquated"
  },
  {
    "word": "Keen",
    "synonym": "sharp, poignant",
    "antonym": "Vapid, insipid"
  },
  {
    "word": "Kindred",
    "synonym": "relation, species",
    "antonym": "Unrelated, dissimilar"
  },
  {
    "word": "Knave",
    "synonym": "dishonest, scoundrel",
    "antonym": "Paragon, innocent"
  },
  {
    "word": "Knell",
    "synonym": "death knell, last blow",
    "antonym": "Reconstruction, rediscovery"
  },
  {
    "word": "Knotty",
    "synonym": "complicated difficult",
    "antonym": "Simple, manageable"
  },
  {
    "word": "Laconic",
    "synonym": "Brief, Concise",
    "antonym": "Verbose, Wordy"
  },
  {
    "word": "Languid",
    "synonym": "Sluggish, apathetic",
    "antonym": "Energetic, spirited"
  },
  {
    "word": "Lassitude",
    "synonym": "Weariness, Lethargy",
    "antonym": "Energy, Vitality"
  },
  {
    "word": "Laud",
    "synonym": "Praise, Commend",
    "antonym": "Criticize, Blame"
  },
  {
    "word": "Lavish",
    "synonym": "abundant, excessive",
    "antonym": "Scarce, deficient"
  },
  {
    "word": "Lax",
    "synonym": "slack, careless",
    "antonym": "Firm, reliable"
  },
  {
    "word": "Lenient",
    "synonym": "compassionate, merciful",
    "antonym": "Cruel, severe"
  },
  {
    "word": "Levee",
    "synonym": "Embankment, Dam",
    "antonym": "Flood, Inundation"
  },
  {
    "word": "Levity",
    "synonym": "Frivolity, Lightness",
    "antonym": "Seriousness, Gravity"
  },
  {
    "word": "Liable",
    "synonym": "accountable, bound",
    "antonym": "Unaccountable, apt to"
  },
  {
    "word": "Liberal",
    "synonym": "magnanimous, generous",
    "antonym": "Stingy, malicious"
  },
  {
    "word": "Linger",
    "synonym": "loiter, prolong",
    "antonym": "Hasten, quicken"
  },
  {
    "word": "Loquacious",
    "synonym": "Talkative, Chatty",
    "antonym": "Taciturn, Reticent"
  },
  {
    "word": "Lucid",
    "synonym": "sound, rational",
    "antonym": "Obscure, hidden"
  },
  {
    "word": "Luminous",
    "synonym": "Bright, Radiant",
    "antonym": "Dark, Dull"
  },
  {
    "word": "Lunacy",
    "synonym": "delusion, insanity",
    "antonym": "Normalcy, sanity"
  },
  {
    "word": "Lure",
    "synonym": "attract, entice",
    "antonym": "Repel, dissuade"
  },
  {
    "word": "Luscious",
    "synonym": "palatable, delicious",
    "antonym": "Unsavory, tart"
  },
  {
    "word": "Luxuriant",
    "synonym": "profuse, abundant",
    "antonym": "Scanty, meagre"
  },
  {
    "word": "Magnanimity",
    "synonym": "Generosity, Nobility",
    "antonym": "Stinginess, Pettiness"
  },
  {
    "word": "Malice",
    "synonym": "Vengefulness, grudge",
    "antonym": "Goodwill, Kindness"
  },
  {
    "word": "Malingerer",
    "synonym": "Shirker, Slacker",
    "antonym": "Worker, Diligent"
  },
  {
    "word": "Malleable",
    "synonym": "Pliable, Flexible",
    "antonym": "Rigid, Stubborn"
  },
  {
    "word": "Mandatory",
    "synonym": "Imperative, requisite",
    "antonym": "Optional"
  },
  {
    "word": "Masculine",
    "synonym": "Gallant, strapping",
    "antonym": "Feminine, meek"
  },
  {
    "word": "Maverick",
    "synonym": "Nonconformist, Rebel",
    "antonym": "Conformist, Follower"
  },
  {
    "word": "Merit",
    "synonym": "Stature, Asset",
    "antonym": "Demerit, dishonor"
  },
  {
    "word": "Metamorphosis",
    "synonym": "Transformation, Change",
    "antonym": "Stagnation, Sameness"
  },
  {
    "word": "Miraculous",
    "synonym": "marvelous, extraordinary",
    "antonym": "Ordinary, trivial"
  },
  {
    "word": "Misanthrope",
    "synonym": "Hater of mankind, Cynic",
    "antonym": "Philanthropist, Humanist"
  },
  {
    "word": "Mitigate",
    "synonym": "alleviate, relieve",
    "antonym": "Augment enhance"
  },
  {
    "word": "Modest",
    "synonym": "humble, courteous",
    "antonym": "Arrogant, pompous"
  },
  {
    "word": "Molest",
    "synonym": "harass, tease",
    "antonym": "Console, soothe"
  },
  {
    "word": "Mollify",
    "synonym": "appease, assuage",
    "antonym": "Irritate, infuriate"
  },
  {
    "word": "Momentous",
    "synonym": "notable, eventful",
    "antonym": "Trivial, insignificant"
  },
  {
    "word": "Monotonous",
    "synonym": "irksome, tedious",
    "antonym": "Varied, pleasant"
  },
  {
    "word": "Morbid",
    "synonym": "Nasty, Macabre",
    "antonym": "Healthy, Cheerful"
  },
  {
    "word": "Morose",
    "synonym": "Sullen, Gloomy",
    "antonym": "Cheerful, Jovial"
  },
  {
    "word": "Munificent",
    "synonym": "liberal, hospitable",
    "antonym": "Frugal, penurious"
  },
  {
    "word": "Murky",
    "synonym": "dusky, dreary",
    "antonym": "Bright, shining"
  },
  {
    "word": "Mutinous",
    "synonym": "recalcitrant, insurgent",
    "antonym": "Submissive, faithful"
  },
  {
    "word": "Mutual",
    "synonym": "joint, identical",
    "antonym": "Separate, distinct"
  },
  {
    "word": "Neophyte",
    "synonym": "Novice, Beginner",
    "antonym": "Veteran, Expert"
  },
  {
    "word": "Niggardly",
    "synonym": "miser, covetous",
    "antonym": "Generous, profuse"
  },
  {
    "word": "Nimble",
    "synonym": "prompt, brisk",
    "antonym": "Sluggish, languid"
  },
  {
    "word": "Nonchalant",
    "synonym": "indifferent, negligent",
    "antonym": "Attentive, considerate"
  },
  {
    "word": "Notion",
    "synonym": "Conceit, Apprehension",
    "antonym": "Reality, Concrete"
  },
  {
    "word": "Novice",
    "synonym": "tyro, beginner",
    "antonym": "Veteran, ingenious"
  },
  {
    "word": "Noxious",
    "synonym": "baneful, injurious",
    "antonym": "Healing, profitable"
  },
  {
    "word": "Nullify",
    "synonym": "cancel, annual",
    "antonym": "Confirm, Uphold"
  },
  {
    "word": "Numerous",
    "synonym": "profuse, various",
    "antonym": "Scarce, deficient"
  },
  {
    "word": "Obdurate",
    "synonym": "Stubborn, Unyielding",
    "antonym": "Flexible, Yielding"
  },
  {
    "word": "Obliging",
    "synonym": "Complaisant, Willing",
    "antonym": "Mulish, Obstinate"
  },
  {
    "word": "Obscure",
    "synonym": "Arcane, Vague",
    "antonym": "Prominent"
  },
  {
    "word": "Obsequious",
    "synonym": "Sycophantic, Servile",
    "antonym": "Independent, Assertive"
  },
  {
    "word": "Obstinate",
    "synonym": "Stubborn, Adamant",
    "antonym": "Pliable, flexible"
  },
  {
    "word": "Obstruct",
    "synonym": "impede, prevent",
    "antonym": "Hasten, encourage"
  },
  {
    "word": "Obtain",
    "synonym": "Access, Inherit",
    "antonym": "Forfeit"
  },
  {
    "word": "Obviate",
    "synonym": "Prevent, Eliminate",
    "antonym": "Allow, Necessitate"
  },
  {
    "word": "Obvious",
    "synonym": "Evident, apparent",
    "antonym": "Obscure, ambiguous"
  },
  {
    "word": "Occlude",
    "synonym": "Block, Obstruct",
    "antonym": "Open, Unblock"
  },
  {
    "word": "Occult",
    "synonym": "latent, ambiguous",
    "antonym": "Intelligible, transparent"
  },
  {
    "word": "Odious",
    "synonym": "Malevolent, obnoxious",
    "antonym": "Engaging, fascinating"
  },
  {
    "word": "Offensive",
    "synonym": "Abhorrent, obnoxious",
    "antonym": "Engaging, fascinating"
  },
  {
    "word": "Officious",
    "synonym": "Meddlesome, Intrusive",
    "antonym": "Deferential, Reserved"
  },
  {
    "word": "Offspring",
    "synonym": "descendant, sibling",
    "antonym": "Ancestor, forefather"
  },
  {
    "word": "Ominous",
    "synonym": "Menacing, Foreboding",
    "antonym": "Auspicious"
  },
  {
    "word": "Onerous",
    "synonym": "Burdensome, Heavy",
    "antonym": "Light, Easy"
  },
  {
    "word": "Opaque",
    "synonym": "obscure, shady",
    "antonym": "Transparent, bright"
  },
  {
    "word": "Opprobrium",
    "synonym": "Disgrace, Infamy",
    "antonym": "Honor, Praise"
  },
  {
    "word": "Optimist",
    "synonym": "Idealist",
    "antonym": "Pessimist"
  },
  {
    "word": "Oracular",
    "synonym": "cryptic, vague",
    "antonym": "Lucid, distinct"
  },
  {
    "word": "Ordain",
    "synonym": "Order, impose",
    "antonym": "Revoke abolish"
  },
  {
    "word": "Ornamental",
    "synonym": "decorative, adorned",
    "antonym": "Unseemly, plain"
  },
  {
    "word": "Oscillate",
    "synonym": "Vacillate, Waver",
    "antonym": "Steady, Resolve"
  },
  {
    "word": "Ostentatious",
    "synonym": "Showy, Pretentious",
    "antonym": "Modest, Unassuming"
  },
  {
    "word": "Outbreak",
    "synonym": "eruption, insurrection",
    "antonym": "Compliance, subjection"
  },
  {
    "word": "Outrage",
    "synonym": "offence, maltreatment",
    "antonym": "Praise, favour"
  },
  {
    "word": "Pacify",
    "synonym": "Appease, Chasten",
    "antonym": "Irritate, worsen"
  },
  {
    "word": "Pamper",
    "synonym": "Flatter, indulge",
    "antonym": "Deny, disparage"
  },
  {
    "word": "Paragon",
    "synonym": "Model, Epitome",
    "antonym": "Flaw, Imperfection"
  },
  {
    "word": "Paramount",
    "synonym": "foremost, eminent",
    "antonym": "Trivial, inferior"
  },
  {
    "word": "Partisan",
    "synonym": "Biased, Prejudiced",
    "antonym": "Impartial, Neutral"
  },
  {
    "word": "Pathological",
    "synonym": "Diseased, Unhealthy",
    "antonym": "Healthy, Normal"
  },
  {
    "word": "Pedantic",
    "synonym": "Bookish, Academic",
    "antonym": "Simple, Informal"
  },
  {
    "word": "Peerless",
    "synonym": "matchless, unrivalled",
    "antonym": "Mediocre, commonplace"
  },
  {
    "word": "Peevish",
    "synonym": "perverse, sullen",
    "antonym": "Suave, amiable"
  },
  {
    "word": "Penchant",
    "synonym": "Inclination, Liking",
    "antonym": "Dislike, Aversion"
  },
  {
    "word": "Penury",
    "synonym": "Poverty, Indigence",
    "antonym": "Wealth, Affluence"
  },
  {
    "word": "Perfidious",
    "synonym": "Treacherous, Disloyal",
    "antonym": "Loyal, Faithful"
  },
  {
    "word": "Perfunctory",
    "synonym": "Superficial, Cursory",
    "antonym": "Thorough, Meticulous"
  },
  {
    "word": "Persuade",
    "synonym": "Cajole, Impress",
    "antonym": "Dissuade, halt"
  },
  {
    "word": "Pertness",
    "synonym": "flippancy, impudence",
    "antonym": "Modesty, diffidence"
  },
  {
    "word": "Perturbed",
    "synonym": "Flustered, anxious",
    "antonym": "Calm"
  },
  {
    "word": "Perverse",
    "synonym": "petulant, obstinate",
    "antonym": "Complacent, docile"
  },
  {
    "word": "Phlegmatic",
    "synonym": "Stoic, Unemotional",
    "antonym": "Emotional, Excitable"
  },
  {
    "word": "Placid",
    "synonym": "tranquil, calm",
    "antonym": "Turbulent, hostile"
  },
  {
    "word": "Plasticity",
    "synonym": "Malleability, Flexibility",
    "antonym": "Rigidity, Stiffness"
  },
  {
    "word": "Platitude",
    "synonym": "Cliché, Truism",
    "antonym": "Originality, Profundity"
  },
  {
    "word": "Plethora",
    "synonym": "Abundance, Excess",
    "antonym": "Scarcity, Lack"
  },
  {
    "word": "Plummet",
    "synonym": "Drop, Fall",
    "antonym": "Rise, Soar"
  },
  {
    "word": "Pompous",
    "synonym": "haughty, arrogant",
    "antonym": "Unpretentious, humble"
  },
  {
    "word": "Porous",
    "synonym": "Permeable, Absorbent",
    "antonym": "Impermeable, Solid"
  },
  {
    "word": "Preamble",
    "synonym": "Introduction, Preface",
    "antonym": "Conclusion, Epilogue"
  },
  {
    "word": "Precarious",
    "synonym": "doubtful, insecure",
    "antonym": "Assured"
  },
  {
    "word": "Precipitate",
    "synonym": "Hasty, Rash",
    "antonym": "Deliberate, Cautious"
  },
  {
    "word": "Precursor",
    "synonym": "Forerunner, Harbinger",
    "antonym": "Follower, Successor"
  },
  {
    "word": "Predicament",
    "synonym": "plight, dilemma",
    "antonym": "Resolution, confidence"
  },
  {
    "word": "Presumptuous",
    "synonym": "Arrogant, Overconfident",
    "antonym": "Humble, Modest"
  },
  {
    "word": "Prevaricate",
    "synonym": "Lie, Equivocate",
    "antonym": "Truth, Honesty"
  },
  {
    "word": "Probity",
    "synonym": "Integrity, Honesty",
    "antonym": "Dishonesty, Corruption"
  },
  {
    "word": "Prodigal",
    "synonym": "Wasteful, Extravagant",
    "antonym": "Frugal, Economical"
  },
  {
    "word": "Progress",
    "synonym": "Pace, Betterment",
    "antonym": "Retrogress, worsening"
  },
  {
    "word": "Prompt",
    "synonym": "Precise, Punctual",
    "antonym": "Slow, Negligent"
  },
  {
    "word": "Propagate",
    "synonym": "Inseminate, fecundate",
    "antonym": "Suppress, deplete"
  },
  {
    "word": "Propitiate",
    "synonym": "Appease, Pacify",
    "antonym": "Anger, Provoke"
  },
  {
    "word": "Propriety",
    "synonym": "Decorum, Etiquette",
    "antonym": "Impropriety, Rudeness"
  },
  {
    "word": "Proscribe",
    "synonym": "Forbid, Prohibit",
    "antonym": "Permit, Allow"
  },
  {
    "word": "Prudence",
    "synonym": "Vigilance, Discretion",
    "antonym": "Indiscretion"
  },
  {
    "word": "Pungent",
    "synonym": "Sharp, Biting",
    "antonym": "Bland, Mild"
  },
  {
    "word": "Quack",
    "synonym": "Impostor, deceiver",
    "antonym": "Upright, unfeigned"
  },
  {
    "word": "Quaint",
    "synonym": "Queer, strange",
    "antonym": "Familiar, usual"
  },
  {
    "word": "Qualified",
    "synonym": "Limited, Restricted",
    "antonym": "Unconditional, Absolute"
  },
  {
    "word": "Quarantine",
    "synonym": "seclude, screen",
    "antonym": "Befriend, socialize"
  },
  {
    "word": "Quell",
    "synonym": "subdue, reduce",
    "antonym": "Exacerbate, agitate"
  },
  {
    "word": "Quibble",
    "synonym": "equivocate, prevaricate",
    "antonym": "Unfeigned, plain"
  },
  {
    "word": "Quiescent",
    "synonym": "Dormant, Inactive",
    "antonym": "Active, Agitated"
  },
  {
    "word": "Raid",
    "synonym": "Incursion, Foray",
    "antonym": "Retreat, release"
  },
  {
    "word": "Rapidity",
    "synonym": "Quickness, Velocity",
    "antonym": "Inertia, lanquidity"
  },
  {
    "word": "Rarefied",
    "synonym": "Refined, Exalted",
    "antonym": "Dense, Common"
  },
  {
    "word": "Ratify",
    "synonym": "consent, approve",
    "antonym": "Deny, dissent"
  },
  {
    "word": "Ravage",
    "synonym": "Destroy, ruin",
    "antonym": "Reconstruct, renovate"
  },
  {
    "word": "Reason",
    "synonym": "Acumen, Bounds",
    "antonym": "Folly, Speculation"
  },
  {
    "word": "Rebellious",
    "synonym": "Restless, attacking",
    "antonym": "Submissive, Compliant"
  },
  {
    "word": "Recalcitrant",
    "synonym": "Stubborn, Defiant",
    "antonym": "Docile, Obedient"
  },
  {
    "word": "Recant",
    "synonym": "Retract, Renounce",
    "antonym": "Assert, Maintain"
  },
  {
    "word": "Recluse",
    "synonym": "Hermit, Solitary",
    "antonym": "Socialite, Outgoing"
  },
  {
    "word": "Recondite",
    "synonym": "Obscure, Esoteric",
    "antonym": "Simple, Accessible"
  },
  {
    "word": "Rectify",
    "synonym": "Amend, Remedy",
    "antonym": "Falsify, Worsen"
  },
  {
    "word": "Redeem",
    "synonym": "Recover, liberate",
    "antonym": "Conserve lose"
  },
  {
    "word": "Refractory",
    "synonym": "Stubborn, Unmanageable",
    "antonym": "Tractable, Manageable"
  },
  {
    "word": "Refute",
    "synonym": "Disprove, Contradict",
    "antonym": "Prove, Confirm"
  },
  {
    "word": "Relegate",
    "synonym": "Demote, Downgrade",
    "antonym": "Promote, Elevate"
  },
  {
    "word": "Reluctant",
    "synonym": "Cautious, Averse",
    "antonym": "anxious, Eager"
  },
  {
    "word": "Remnant",
    "synonym": "Residue, piece",
    "antonym": "Entire, whole"
  },
  {
    "word": "Remonstrate",
    "synonym": "Censure, protest",
    "antonym": "Agree, loud"
  },
  {
    "word": "Remorse",
    "synonym": "Regret, penitence",
    "antonym": "Ruthlessness, obduracy"
  },
  {
    "word": "Reprobate",
    "synonym": "Scoundrel, Villain",
    "antonym": "Saint, Moral"
  },
  {
    "word": "Repudiate",
    "synonym": "Disown, Reject",
    "antonym": "Accept, Embrace"
  },
  {
    "word": "Rescind",
    "synonym": "Annul, abrogate",
    "antonym": "Delegate, permit"
  },
  {
    "word": "Resentment",
    "synonym": "Displeasure, wrath",
    "antonym": "Content, Cheer"
  },
  {
    "word": "Restrain",
    "synonym": "Detain, Confine",
    "antonym": "Incite"
  },
  {
    "word": "Reticent",
    "synonym": "Reserved, Silent",
    "antonym": "Talkative, Loquacious"
  },
  {
    "word": "Retract",
    "synonym": "Recant, withdraw",
    "antonym": "Confirm, assert"
  },
  {
    "word": "Reverence",
    "synonym": "Respect, esteem",
    "antonym": "Disrespect, affront"
  },
  {
    "word": "Reverent",
    "synonym": "Respectful, Devout",
    "antonym": "Disrespectful, Irreverent"
  },
  {
    "word": "Rout",
    "synonym": "Vanquish, overthrow",
    "antonym": "Succumb, withdraw"
  },
  {
    "word": "Rustic",
    "synonym": "Rural, uncivilized",
    "antonym": "Cultured, Refined"
  },
  {
    "word": "Ruthless",
    "synonym": "Remorseless, inhumane",
    "antonym": "Compassionate, lenient"
  },
  {
    "word": "Sacred",
    "synonym": "Cherish, Divine",
    "antonym": "Ungodly, Profane"
  },
  {
    "word": "Salubrious",
    "synonym": "Healthful, Wholesome",
    "antonym": "Unhealthy, Harmful"
  },
  {
    "word": "Sarcastic",
    "synonym": "Ironical, derisive",
    "antonym": "Courteous, gracious"
  },
  {
    "word": "Satiate",
    "synonym": "Satisfy, Sate",
    "antonym": "Starve, Deprive"
  },
  {
    "word": "Saucy",
    "synonym": "Impudent, insolent",
    "antonym": "Modest, humble"
  },
  {
    "word": "Savage",
    "synonym": "Wild, untamed",
    "antonym": "Polished, Civilized"
  },
  {
    "word": "Savor",
    "synonym": "Enjoy, Relish",
    "antonym": "Dislike, Detest"
  },
  {
    "word": "Scanty",
    "synonym": "scarce, insufficient",
    "antonym": "Lavish, multitude"
  },
  {
    "word": "Secrete",
    "synonym": "Hide, Conceal",
    "antonym": "Reveal, Disclose"
  },
  {
    "word": "Servile",
    "synonym": "Slavish, Docile",
    "antonym": "Aggressive, Dominant"
  },
  {
    "word": "Shabby",
    "synonym": "miserable, impoverished",
    "antonym": "Prosperous, thriving"
  },
  {
    "word": "Shard",
    "synonym": "Fragment, Piece",
    "antonym": "Whole, Entirety"
  },
  {
    "word": "Shrewd",
    "synonym": "Cunning, craftly",
    "antonym": "Simple, imbecile"
  },
  {
    "word": "Slander",
    "synonym": "defame, malign",
    "antonym": "Applaud, approve"
  },
  {
    "word": "Sneer",
    "synonym": "mock, scorn",
    "antonym": "Flatter, praise"
  },
  {
    "word": "Solicit",
    "synonym": "entreat, implore",
    "antonym": "Protest oppose"
  },
  {
    "word": "Solicitous",
    "synonym": "Concerned, Anxious",
    "antonym": "Indifferent, Unconcerned"
  },
  {
    "word": "Soporific",
    "synonym": "Sleep-inducing, Hypnotic",
    "antonym": "Stimulating, Invigorating"
  },
  {
    "word": "Specious",
    "synonym": "Misleading, Fallacious",
    "antonym": "Valid, Sound"
  },
  {
    "word": "Sporadic",
    "synonym": "intermittent, scattered",
    "antonym": "Incessant, frequent"
  },
  {
    "word": "Spry",
    "synonym": "Nimble, Brisk",
    "antonym": "Lethargic, Sluggish"
  },
  {
    "word": "Spurious",
    "synonym": "Fake, Counterfeit",
    "antonym": "Genuine, Authentic"
  },
  {
    "word": "Squalid",
    "synonym": "dirty, filthy",
    "antonym": "Tidy, Attractive"
  },
  {
    "word": "Stain",
    "synonym": "blemish, tarnish",
    "antonym": "Honor, purify"
  },
  {
    "word": "Startled",
    "synonym": "Frightened, Shocked",
    "antonym": "Waveringly"
  },
  {
    "word": "Steep",
    "synonym": "Course, lofty",
    "antonym": "Flat, gradual"
  },
  {
    "word": "Sterile",
    "synonym": "Barren, Impotent",
    "antonym": "Profitable, Potent"
  },
  {
    "word": "Stigma",
    "synonym": "Disgrace, Shame",
    "antonym": "Honor, Credit"
  },
  {
    "word": "Stint",
    "synonym": "Limit, Restrict",
    "antonym": "Abundance, Surplus"
  },
  {
    "word": "Stipulate",
    "synonym": "Specify, Condition",
    "antonym": "Imply, Generalize"
  },
  {
    "word": "Stolid",
    "synonym": "Impassive, Unemotional",
    "antonym": "Excitable, Emotional"
  },
  {
    "word": "Stranger",
    "synonym": "Immigrant, guest",
    "antonym": "Acquaintance, national"
  },
  {
    "word": "Striated",
    "synonym": "Striped, Grooved",
    "antonym": "Smooth, Plain"
  },
  {
    "word": "Strut",
    "synonym": "Swell, Show off",
    "antonym": "Humble, Shrink"
  },
  {
    "word": "Stupor",
    "synonym": "lethargy, unconsciousness",
    "antonym": "Sensibility, Consciousness"
  },
  {
    "word": "Sublime",
    "synonym": "Magnificent, eminent",
    "antonym": "Ridiculous"
  },
  {
    "word": "Subpoena",
    "synonym": "Summons, Warrant",
    "antonym": "Exemption, Release"
  },
  {
    "word": "Subsequent",
    "synonym": "consequent, following",
    "antonym": "Preceding, previous"
  },
  {
    "word": "Substantial",
    "synonym": "Considerable, solid",
    "antonym": "Tenuous, fragile"
  },
  {
    "word": "Substantiate",
    "synonym": "Verify, Confirm",
    "antonym": "Disprove, Refute"
  },
  {
    "word": "Subterfuge",
    "synonym": "Deceit, Stratagem",
    "antonym": "Frankness, Openness"
  },
  {
    "word": "Subvert",
    "synonym": "Demolish, sabotage",
    "antonym": "Generate, organize"
  },
  {
    "word": "Successful",
    "synonym": "Propitious, Felicitous",
    "antonym": "Destitute, Untoward"
  },
  {
    "word": "Succinct",
    "synonym": "Concise, Terse",
    "antonym": "Lengthy, polite"
  },
  {
    "word": "Superficial",
    "synonym": "Partial, shallow",
    "antonym": "Profound, discerning"
  },
  {
    "word": "Supersede",
    "synonym": "Replace, Supplant",
    "antonym": "Precede, Follow"
  },
  {
    "word": "Supposition",
    "synonym": "Hypothesis, Assumption",
    "antonym": "Fact, Certainty"
  },
  {
    "word": "Sycophant",
    "synonym": "Parasite, flatterer",
    "antonym": "Devoted, loyal"
  },
  {
    "word": "Sympathy",
    "synonym": "Tenderness, harmony",
    "antonym": "Antipathy, Discord"
  },
  {
    "word": "System",
    "synonym": "Scheme, Entity",
    "antonym": "Chaos, Disorder"
  },
  {
    "word": "Taboo",
    "synonym": "Prohibit, ban",
    "antonym": "Permit, consent"
  },
  {
    "word": "Taciturn",
    "synonym": "Reserved, silent",
    "antonym": "Talkative, extrovert"
  },
  {
    "word": "Tame",
    "synonym": "Compliant, Subdued",
    "antonym": "Wild, untamed"
  },
  {
    "word": "Tangential",
    "synonym": "Peripheral, Irrelevant",
    "antonym": "Relevant, Central"
  },
  {
    "word": "Tedious",
    "synonym": "Wearisome. Irksome",
    "antonym": "Exhilarating, lively"
  },
  {
    "word": "Temperate",
    "synonym": "Cool, moderate",
    "antonym": "Boisterous, violent"
  },
  {
    "word": "Tenacious",
    "synonym": "Stubborn, Dodge",
    "antonym": "Docile, non- resinous"
  },
  {
    "word": "Tenement",
    "synonym": "Apartment, Digs",
    "antonym": "Breakeven, dislodge"
  },
  {
    "word": "Tenuous",
    "synonym": "Weak, Flimsy",
    "antonym": "Strong, Substantial"
  },
  {
    "word": "Terse",
    "synonym": "Incisive, Compact",
    "antonym": "Diffuse, Gentle"
  },
  {
    "word": "Thick",
    "synonym": "Chunky, massive",
    "antonym": "Thin, attenuated"
  },
  {
    "word": "Thrifty",
    "synonym": "Frugal, prudent",
    "antonym": "Extravagant"
  },
  {
    "word": "Throng",
    "synonym": "Assembly, crowd",
    "antonym": "Dispersion, sparsity"
  },
  {
    "word": "Timid",
    "synonym": "Diffident, coward",
    "antonym": "Bold, intrepid"
  },
  {
    "word": "Tirade",
    "synonym": "Harangue, Diatribe",
    "antonym": "Praise, Panegyric"
  },
  {
    "word": "Torpor",
    "synonym": "Lethargy, Stupor",
    "antonym": "Energy, Vigor"
  },
  {
    "word": "Tortuous",
    "synonym": "Winding, Twisting",
    "antonym": "Straightforth, Direct"
  },
  {
    "word": "Tractable",
    "synonym": "Docile, Manageable",
    "antonym": "Obstinate, Unruly"
  },
  {
    "word": "Tranquil",
    "synonym": "Peaceful, composed",
    "antonym": "Violent, furious"
  },
  {
    "word": "Transgression",
    "synonym": "Sin, Violation",
    "antonym": "Obedience, Virtue"
  },
  {
    "word": "Transient",
    "synonym": "Temporal, transitory",
    "antonym": "Lasting, enduring"
  },
  {
    "word": "Transparent",
    "synonym": "Diaphanous",
    "antonym": "Opaque"
  },
  {
    "word": "Treacherous",
    "synonym": "Dishonest, duplicitous",
    "antonym": "Forthright, reliable"
  },
  {
    "word": "Tremble",
    "synonym": "Vibrate",
    "antonym": "Steady"
  },
  {
    "word": "Trenchant",
    "synonym": "Assertive, forceful",
    "antonym": "Feeble, ambiguous"
  },
  {
    "word": "Trivial",
    "synonym": "Trifling, insignificant",
    "antonym": "Significant, veteran"
  },
  {
    "word": "Truculence",
    "synonym": "Aggression, Ferocity",
    "antonym": "Gentleness, Peace"
  },
  {
    "word": "Tumultuous",
    "synonym": "Violent, riotous",
    "antonym": "Peaceful, harmonious"
  },
  {
    "word": "Tyro",
    "synonym": "Beginner, riotous",
    "antonym": "Proficient, veteran"
  },
  {
    "word": "Umbrage",
    "synonym": "Chagrin, offense",
    "antonym": "Sympathy, goodwill"
  },
  {
    "word": "Uncouth",
    "synonym": "Awkward, ungraceful",
    "antonym": "Elegant, Compensate"
  },
  {
    "word": "Urchin",
    "synonym": "Foundling, Orphan",
    "antonym": "Creep, Knave"
  },
  {
    "word": "Urge",
    "synonym": "Incite, Implore",
    "antonym": "Abhorrence, Abomination"
  },
  {
    "word": "Utterly",
    "synonym": "Completely, entirely",
    "antonym": "Deficiently, incomplete"
  },
  {
    "word": "Vacillate",
    "synonym": "Waver, Fluctuate",
    "antonym": "Decide, Resolve"
  },
  {
    "word": "Vagrant",
    "synonym": "Wander, roaming",
    "antonym": "Steady, settled"
  },
  {
    "word": "Vain",
    "synonym": "Arrogant, egoistic",
    "antonym": "Modest"
  },
  {
    "word": "Valor",
    "synonym": "Bravery, prowess",
    "antonym": "Fear, cowardice"
  },
  {
    "word": "Vanity",
    "synonym": "Conceit, pretension",
    "antonym": "Modesty, Humility"
  },
  {
    "word": "Venerable",
    "synonym": "Esteemed, honored",
    "antonym": "Unworthy, immature"
  },
  {
    "word": "Venerate",
    "synonym": "Revere, Worship",
    "antonym": "Disdain, Despise"
  },
  {
    "word": "Venom",
    "synonym": "Poison, malevolence",
    "antonym": "Antidote, Benevolent"
  },
  {
    "word": "Veracious",
    "synonym": "Truthful, Honest",
    "antonym": "Deceitful, Lying"
  },
  {
    "word": "Verbose",
    "synonym": "Wordy, Long-winded",
    "antonym": "Concise, Succinct"
  },
  {
    "word": "Veteran",
    "synonym": "Ingenious, experienced",
    "antonym": "Novice, tyro"
  },
  {
    "word": "Viable",
    "synonym": "Feasible, Workable",
    "antonym": "Impractical, Unworkable"
  },
  {
    "word": "Vicious",
    "synonym": "Corrupt, obnoxious",
    "antonym": "Noble, Virtuous"
  },
  {
    "word": "Vigilant",
    "synonym": "Cautious, alert",
    "antonym": "Careless, negligent"
  },
  {
    "word": "Vilify",
    "synonym": "Malign, Slur, Defame",
    "antonym": "Cherish, Commend"
  },
  {
    "word": "Virtue",
    "synonym": "Ethic, morality",
    "antonym": "Vice, dishonesty"
  },
  {
    "word": "Viscous",
    "synonym": "Sticky, Thick",
    "antonym": "Thin, Watery"
  },
  {
    "word": "Vituperative",
    "synonym": "Abusive, Critical",
    "antonym": "Complimentary, Praising"
  },
  {
    "word": "Vivacious",
    "synonym": "Spirited, Energetic",
    "antonym": "Dispirited, Unattractive"
  },
  {
    "word": "Vivid",
    "synonym": "Eloquent, lucid",
    "antonym": "Dull, Dim"
  },
  {
    "word": "Volatile",
    "synonym": "Unstable, Changeable",
    "antonym": "Stable, Consistent"
  },
  {
    "word": "Vouch",
    "synonym": "Confirm, consent",
    "antonym": "Repudiate, prohibit"
  },
  {
    "word": "Waive",
    "synonym": "Relinquish, remove",
    "antonym": "Impose, Clamp"
  },
  {
    "word": "Wan",
    "synonym": "Pale, faded",
    "antonym": "Bright, healthy"
  },
  {
    "word": "Wane",
    "synonym": "Decline, Dwindle",
    "antonym": "Ameliorate, Rise"
  },
  {
    "word": "Wary",
    "synonym": "cautious, circumspect",
    "antonym": "Heedless, negligent"
  },
  {
    "word": "Wed",
    "synonym": "marry, combine",
    "antonym": "Divorce, Separate"
  },
  {
    "word": "Welter",
    "synonym": "Turmoil, Confusion",
    "antonym": "Order, Calm"
  },
  {
    "word": "Whimsical",
    "synonym": "Capricious, Fanciful",
    "antonym": "Steady, Serious"
  },
  {
    "word": "Wicked",
    "synonym": "vicious, immoral",
    "antonym": "Virtuous, Noble"
  },
  {
    "word": "Wield",
    "synonym": "Exert, employ",
    "antonym": "Forgo, avoid"
  },
  {
    "word": "Wile",
    "synonym": "Trickery, Artifice",
    "antonym": "Naivety, honor"
  },
  {
    "word": "Wilt",
    "synonym": "wither, perish",
    "antonym": "Revive, bloom"
  },
  {
    "word": "Winsome",
    "synonym": "Beautiful, Comely",
    "antonym": "Alluring, Rapturous"
  },
  {
    "word": "Yearn",
    "synonym": "languish, crave",
    "antonym": "Content, satisfy"
  },
  {
    "word": "Yell",
    "synonym": "shout, shriek",
    "antonym": "Whisper muted"
  },
  {
    "word": "Yield",
    "synonym": "surrender abdicate",
    "antonym": "Resist, protest"
  },
  {
    "word": "Yoke",
    "synonym": "connect, harness",
    "antonym": "Liberate, Release"
  },
  {
    "word": "Zeal",
    "synonym": "eagerness, fervor",
    "antonym": "Apathy, lethargy"
  },
  {
    "word": "Zenith",
    "synonym": "summit, apex",
    "antonym": "Nadir, base"
  },
  {
    "word": "Zest",
    "synonym": "delight, enthusiasm",
    "antonym": "Disgust, passive"
  },
  {
    "word": "Zig -zag",
    "synonym": "oblique, wayward",
    "antonym": "Straight, unbent"
  }
];
