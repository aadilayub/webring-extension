const sites = [
  'http://estevancarlos.com',
  'https://electro.pizza',
  'https://avanier.now.sh',
  'https://kaemura.com',
  'https://bismuth.garden',
  'https://hraew.autophagy.io',
  'http://evenunto.net',
  'https://anxl.faith',
  'https://xvw.github.io',
  'https://heracl.es',
  'https://turelio.github.io',
  'https://craze.co.uk',
  'https://shaneckel.com',
  'https://cblgh.org',
  'https://ellugar.co',
  'http://chigby.org',
  'https://longest.voyage',
  'https://palomakop.tv',
  'https://v-os.ca',
  'https://jmandel.xyz',
  'https://2d4.dev',
  'https://nathanwentworth.co',
  'https://uonai.space',
  'http://controls.ee',
  'https://wasin.io',
  'https://inns.studio',
  'http://kokorobot.ca',
  'https://ameyama.com',
  'https://wake.st',
  'https://xarene.la',
  'https://alex.zyzhang.me',
  'http://bildwissenschaft.vortok.info',
  'https://jakofranko.github.com',
  'https://aeriform.io',
  'http://npisanti.com',
  'https://underscorediscovery.ca',
  'https://drisc.io',
  'https://ricky.codes',
  'https://maxdeviant.com',
  'https://tynandebold.com',
  'http://gytis.co',
  'https://nomand.co',
  'http://memoriata.com',
  'https://mmm.s-ol.nu',
  'https://chad.is',
  'https://smidgeo.com/bots',
  'https://iko.soy',
  'http://atelieroilandsugar.com',
  'https://magoz.is',
  'https://szymonkaliski.com',
  'https://phse.net',
  'https://rosano.ca',
  'https://gndclouds.cc',
  'https://xuv.be',
  'https://dsdshcym.github.io',
  'https://boffosocko.com',
  'https://hex22.org',
  'https://patrikarvidsson.com',
  'https://xinniw.github.io',
  'https://mboxed.github.io/sodatsu',
  'https://letters.vexingworkshop.com',
  'https://tom.org.nz',
  'https://teknari.com',
  'https://colectivo-de-livecoders.gitlab.io',
  'https://www.madewithtea.com',
  'https://amorris.ca',
  'http://www.miha-co.ca',
  'https://buzzert.net',
  'https://notes.stuartpb.com/',
  'https://xxiii.co',
  'https://kor.nz',
  'https://lublin.se',
  'https://zanneth.com',
  'https://eli.li',
  'https://gueorgui.net',
  'https://www.tatecarson.com',
  'https://azlen.me',
  'https://opinionatedguide.github.io/',
  'https://chrismaughan.com/',
  'https://oddworlds.org/',
  'https://fundor333.com/',
  'https://cass.si',
  'https://dotcomboom.somnolescent.net/',
  'https://cadmican.neocities.org/',
  'https://sixey.es/',
	'https://resevoir.net',
  'https://tilde.town/~dustin/',
  'http://www.jameschip.io',
  'https://patrick-is.cool',
  'https://icyphox.sh',
  'https://royniang.com',
  'https://www.raul.earth/',
  'https://crlf.site',
  'https://www.johannesg.com',
  'https://provokeanalog.com',
  'https://eti.tf',
  'https://rezmason.net',
  'https://estfyr.net',
  'https://paysonwallach.com',
  'https://natwelch.com',
  'https://parkimminent.com',
  'https://aklsh.github.io',
  'https://0xff.nu',
  'https://simone.computer',
  'https://xj9.io',
  'https://simply.personal.jenett.org',
  'http://q.pfiffer.org/',
  'https://ashpex.neocities.org',
  'https://zvava.org',
  'https://amorphic.space',
  'https://www.edwinwenink.xyz',
  'https://www.mentalnodes.com',
  'https://copiona.com',
  'https://proycon.anaproy.nl',
  'https://www.marginchronicles.com',
  'https://roytang.net',
  'https://materialfuture.net',
  'https://solquemal.com/',
  'https://dampfkraft.com',
  'https://travisshears.com',
  'https://futuristan.io',
  'https://www.romainaubert.com/',
  'https://fdisk.space',
  'https://now.lectronice.com',
  'https://matildepark.ca',
  'https://awalvie.me',
  'https://nor.the-rn.info',
  'https://nchrs.xyz',
  'https://ix5.org',
  'https://juliendesrosiers.com',
  'https://inqlab.net',
  'https://deianeira.co',
  
]

function surf() {
  let randomSite = sites[Math.floor(Math.random() * sites.length)];
  browser.tabs.update({
    url: randomSite
  });
}

browser.browserAction.onClicked.addListener(surf);
