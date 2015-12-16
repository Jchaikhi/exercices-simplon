var me = {

  name: "Justin",
  last_name: "",
  birthday: "13/09/1996",
  github: "",
  occupation: "Web developpeur",
  infos: "Bonjour j'aime le yop",

  getFullName: function() {
    return(this.name + " " + this.last_name);
  },
  getOccupation: function() {
    return(this.occupation);
  },
  setName: function(posey) {
    this.last_name = posey;
  },
  getField: function() {
    return(this.occupation);
  },
  setField: function(lalala, lololo) {
    this[lalala] = lololo;
  },
  getGithub: function() {
    return("https://github.com/" + this.github);
  },
  setGithub: function(mongit) {
    this.github = mongit;
  },
  getInfos: function() {
    return(this.infos + " " + "je m'apelle" + this.getFullName + "je suis née le" + this.birthday);
  },


};


me.github = "Jchaikhi";
me.last_name = "Chaikhi";
me.setField('occupation', 'Mec qui galere');

console.log(me.github);
console.log(me.getGithub());
