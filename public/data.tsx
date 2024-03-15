interface Designer {
  id: string;
  name: string;
  link: string;
}

interface Brand {
  id: string;
  name: string;
  link: string;
}

const AlphabetList = [
  { id: "a" },
  { id: "b" },
  { id: "c" },
  { id: "d" },
  { id: "e" },
  { id: "f" },
  { id: "g" },
  { id: "h" },
  { id: "i" },
  { id: "j" },
  { id: "k" },
  { id: "l" },
  { id: "m" },
  { id: "n" },
  { id: "o" },
  { id: "p" },
  { id: "q" },
  { id: "r" },
  { id: "s" },
  { id: "t" },
  { id: "u" },
  { id: "v" },
  { id: "x" },
  { id: "y" },
  { id: "z" },
  { id: "#" },
];

const DesignerList = [
  { id: "alberta-ferretti", name: "Alberta Ferretti", link: "/" },
  { id: "alexander-mcqueen", name: "Alexander McQueen", link: "/" },
  { id: "anna-sui", name: "Anna Sui", link: "/" },
  { id: "alessandro-michele", name: "Alessandro Michele", link: "/" },
  { id: "anne-klein", name: "Anne Klein", link: "/" },
  { id: "aurelio-costarella", name: "Aurelio Costarella", link: "/" },
  { id: "angel-sanchez", name: "Ángel Sánchez", link: "/" },
  { id: "adeline-andre", name: "Adeline André", link: "/" },
  { id: "antonio-berardi", name: "Antonio Berardi", link: "/" },
  { id: "akira-isogawa", name: "Akira Isogawa", link: "/" },
  { id: "adrian", name: "Adrian", link: "/" },
  { id: "alexis-mabille", name: "Alexis Mabille", link: "/" },
  { id: "africa-miranda", name: "Africa Miranda", link: "/" },
  { id: "amanda-wakeley", name: "Amanda Wakeley", link: "/" },
  { id: "alice-mccall", name: "Alice McCall", link: "/" },
  { id: "adam-lippes", name: "Adam Lippes", link: "/" },
  { id: "alber-elbaz", name: "Alber Elbaz", link: "/" },
  { id: "anrealage", name: "Anrealage", link: "/" },
  { id: "akris", name: "Akris", link: "/" },
  { id: "azzedine-alaïa", name: "Azzedine Alaïa", link: "/" },
  { id: "balenciaga", name: "Balenciaga", link: "/" },
  { id: "brandon-maxwell", name: "Brandon Maxwell", link: "/" },
  { id: "brian-atwood", name: "Brian Atwood", link: "/" },
  { id: "betsey-johnson", name: "Betsey Johnson", link: "/" },
  { id: "burberry", name: "Burberry", link: "/" },
  { id: "badgley-mischka", name: "Badgley Mischka", link: "/" },
  { id: "bill-blass", name: "Bill Blass", link: "/" },
  { id: "bottega-veneta", name: "Bottega Veneta", link: "/" },
  { id: "bibhu-mohapatra", name: "Bibhu Mohapatra", link: "/" },
  { id: "balmain", name: "Balmain", link: "/" },
  { id: "bernhard-willhelm", name: "Bernhard Willhelm", link: "/" },
  { id: "brioni", name: "Brioni", link: "/" },
  { id: "bonnie-cashin", name: "Bonnie Cashin", link: "/" },
  { id: "carolina-herrera", name: "Carolina Herrera", link: "/" },
  { id: "christian-lacroix", name: "Christian Lacroix", link: "/" },
  { id: "calvin-klein", name: "Calvin Klein", link: "/" },
  { id: "chanel", name: "Chanel", link: "/" },
  { id: "christopher-kane", name: "Christopher Kane", link: "/" },
  { id: "chitose-abe", name: "Chitose Abe", link: "/" },
  { id: "cynthia-rowley", name: "Cynthia Rowley", link: "/" },
  { id: "carine-roitfeld", name: "Carine Roitfeld", link: "/" },
  { id: "claire-mccardell", name: "Claire McCardell", link: "/" },
  { id: "christian-siriano", name: "Christian Siriano", link: "/" },
  { id: "carly-cushnie", name: "Carly Cushnie", link: "/" },
  { id: "craig-green", name: "Craig Green", link: "/" },
  { id: "celine", name: "Céline", link: "/" },
  { id: "catherine-malandrino", name: "Catherine Malandrino", link: "/" },
  { id: "carven", name: "Carven", link: "/" },
  { id: "carolyn-murphy", name: "Carolyn Murphy", link: "/" },
  { id: "charles-frederick-worth", name: "Charles Frederick Worth", link: "/" },
  { id: "christophe-lemaire", name: "Christophe Lemaire", link: "/" },
  { id: "christos-costarellos", name: "Christos Costarellos", link: "/" },
  { id: "chris-benz", name: "Chris Benz", link: "/" },
  { id: "collette-dinnigan", name: "Collette Dinnigan", link: "/" },
  { id: "courrèges", name: "Courrèges", link: "/" },
  { id: "christian-dior", name: "Christian Dior", link: "/" },
  { id: "christian-louboutin", name: "Christian Louboutin", link: "/" },
  { id: "cynthia-vincent", name: "Cynthia Vincent", link: "/" },
  { id: "camilla-and-marc", name: "Camilla and Marc", link: "/" },
  { id: "charles-james", name: "Charles James", link: "/" },
  { id: "carla-zampatti", name: "Carla Zampatti", link: "/" },
  { id: "claudia-schiffer", name: "Claudia Schiffer", link: "/" },
  { id: "christian-wijnants", name: "Christian Wijnants", link: "/" },
  { id: "costarellos", name: "Costarellos", link: "/" },
  { id: "chloé", name: "Chloé", link: "/" },
  { id: "carol-channing", name: "Carol Channing", link: "/" },
  { id: "charlotte-ronson", name: "Charlotte Ronson", link: "/" },
  { id: "chris-han", name: "Chris Han", link: "/" },
  { id: "cristóbal-balenciaga", name: "Cristóbal Balenciaga", link: "/" },
  { id: "diane-von-furstenberg", name: "Diane von Fürstenberg", link: "/" },
  { id: "donna-karan", name: "Donna Karan", link: "/" },
  { id: "dolce-and-gabbana", name: "Dolce & Gabbana", link: "/" },
  { id: "donna-karan-new-york", name: "Donna Karan New York", link: "/" },
  { id: "david-koma", name: "David Koma", link: "/" },
  { id: "daniel-rosenberg", name: "Daniel Rosenberg", link: "/" },
  { id: "david-delfin", name: "David Delfin", link: "/" },
  { id: "daryl-kerrigan", name: "Daryl Kerrigan", link: "/" },
  { id: "daniel-vosovic", name: "Daniel Vosovic", link: "/" },
  { id: "erdem-moralioglu", name: "Erdem Moralioglu", link: "/" },
  { id: "emilio-pucci", name: "Emilio Pucci", link: "/" },
  { id: "esteban-cortazar", name: "Esteban Cortázar", link: "/" },
  { id: "etro", name: "Etro", link: "/" },
  { id: "elie-saab", name: "Elie Saab", link: "/" },
  { id: "emilio-de-la-morena", name: "Emilio de la Morena", link: "/" },
  { id: "enrico-coveri", name: "Enrico Coveri", link: "/" },
  { id: "erika-cavallini", name: "Erika Cavallini", link: "/" },
  { id: "emilio-sotto", name: "Emilio Sotto", link: "/" },
  { id: "emanuel-ungaro", name: "Emanuel Ungaro", link: "/" },
  { id: "elliatt", name: "Elliatt", link: "/" },
  { id: "emily-adams-bode", name: "Emily Adams Bode", link: "/" },
  { id: "fendi", name: "Fendi", link: "/" },
  { id: "francisco-costa", name: "Francisco Costa", link: "/" },
  { id: "francesco-russo", name: "Francesco Russo", link: "/" },
  { id: "francesca-liberatore", name: "Francesca Liberatore", link: "/" },
  { id: "fernando-sanchez", name: "Fernando Sanchez", link: "/" },
  { id: "fashion-east", name: "Fashion East", link: "/" },
  { id: "franco-moschino", name: "Franco Moschino", link: "/" },
  { id: "fanny-bourtach", name: "Fanny Bourtach", link: "/" },
  { id: "frida-gustavsson", name: "Frida Gustavsson", link: "/" },
  { id: "fran-summers", name: "Fran Summers", link: "/" },
  { id: "francisco-lachowski", name: "Francisco Lachowski", link: "/" },
  {
    id: "frederikke-sofie-falbe-hansen",
    name: "Frederikke Sofie Falbe-Hansen",
    link: "/",
  },
  { id: "gabriela-hearst", name: "Gabriela Hearst", link: "/" },
  { id: "gabriella-wilde", name: "Gabriella Wilde", link: "/" },
  { id: "gianni-versace", name: "Gianni Versace", link: "/" },
  { id: "gareth-pugh", name: "Gareth Pugh", link: "/" },
  { id: "genny", name: "Genny", link: "/" },
  { id: "gianfranco-ferre", name: "Gianfranco Ferré", link: "/" },
  { id: "george-almighty-god", name: "George Almighty God", link: "/" },
  { id: "georgina-chapman", name: "Georgina Chapman", link: "/" },
  { id: "georgina-grenville", name: "Georgina Grenville", link: "/" },
  { id: "georgia-fowler", name: "Georgia Fowler", link: "/" },
  { id: "georgia-gibbs", name: "Georgia Gibbs", link: "/" },
  { id: "genevieve-morton", name: "Genevieve Morton", link: "/" },
  { id: "georgia-pratt", name: "Georgia Pratt", link: "/" },
  { id: "georgia-may-jagger", name: "Georgia May Jagger", link: "/" },
  { id: "georgia-howorth", name: "Georgia Howorth", link: "/" },
  { id: "gerard-darel", name: "Gérard Darel", link: "/" },
  { id: "geraldo-da-conceicao", name: "Géraldo Da Conceicao", link: "/" },
  { id: "gina-gershon", name: "Gina Gershon", link: "/" },
  { id: "giulietta", name: "Giulietta", link: "/" },
  { id: "giuseppe-zanotti", name: "Giuseppe Zanotti", link: "/" },
  { id: "gucci", name: "Gucci", link: "/" },
  { id: "gustavo-cadile", name: "Gustavo Cadile", link: "/" },
  { id: "guy-laroche", name: "Guy Laroche", link: "/" },
  { id: "giles-deacon", name: "Giles Deacon", link: "/" },
  { id: "gianvito-rossi", name: "Gianvito Rossi", link: "/" },
  { id: "haley-jeanette", name: "Haley Jeanette", link: "/" },
  { id: "halston", name: "Halston", link: "/" },
  { id: "hannah-jannaway", name: "Hannah Jannaway", link: "/" },
  { id: "hannah-ferguson", name: "Hannah Ferguson", link: "/" },
  { id: "hannah-holman", name: "Hannah Holman", link: "/" },
  { id: "hannah-spearritt", name: "Hannah Spearritt", link: "/" },
  { id: "hannah-murray", name: "Hannah Murray", link: "/" },
];

const BrandList = [
  { id: "alberta-ferretti", name: "Louis Vuitton", link: "/" },
  { id: "alberta-ferretti", name: "Miu Miu", link: "/" },
  { id: "alberta-ferretti", name: "Chanel", link: "/" },
  { id: "alberta-ferretti", name: "Prada", link: "/" },
  { id: "alberta-ferretti", name: "Gucci", link: "/" },
  { id: "alberta-ferretti", name: "Saint Laurent", link: "/" },
  { id: "alberta-ferretti", name: "Valentino", link: "/" },
  { id: "alberta-ferretti", name: "Balenciaga", link: "/" },
  { id: "alberta-ferretti", name: "Tom Ford", link: "/" },
  { id: "alberta-ferretti", name: "Balmain", link: "/" },
];

export { DesignerList, BrandList, AlphabetList };
