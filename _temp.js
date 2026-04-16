
// ===========================
//  POEM DATA
// ===========================
const POEMS = [
  {
    title:"静夜思", author:"李白", dynasty:"唐",
    lines:["床前明月光","疑是地上霜","举头望明月","低头思故乡"],
    info:"这首诗写于唐玄宗开元十五年，李白客居异乡，借月抒发思乡之情，是唐诗中流传最广的名篇之一。"
  },
  {
    title:"春晓", author:"孟浩然", dynasty:"唐",
    lines:["春眠不觉晓","处处闻啼鸟","夜来风雨声","花落知多少"],
    info:"此诗描绘了春天早晨的景致，以清新自然的笔触表达了对春光的珍惜，语言浅近，意境深远。"
  },
  {
    title:"登鹳雀楼", author:"王之涣", dynasty:"唐",
    lines:["白日依山尽","黄河入海流","欲穷千里目","更上一层楼"],
    info:"这首诗以壮阔的意境描绘了登楼所见，后两句寓意深刻，成为鼓励人们积极进取的千古名言。"
  },
  {
    title:"悯农（其一）", author:"李绅", dynasty:"唐",
    lines:["春种一粒粟","秋收万颗子","四海无闲田","农夫犹饿死"],
    info:"这首诗揭示了封建社会农民的悲惨命运，反映了严峻的社会矛盾，是中国古典诗歌中的现实主义名作。"
  },
  {
    title:"悯农（其二）", author:"李绅", dynasty:"唐",
    lines:["锄禾日当午","汗滴禾下土","谁知盘中餐","粒粒皆辛苦"],
    info:"与其一相辅，描写农民在烈日下辛苦劳作，警醒世人珍惜粮食，是家喻户晓的爱惜粮食诗。"
  },
  {
    title:"江雪", author:"柳宗元", dynasty:"唐",
    lines:["千山鸟飞绝","万径人踪灭","孤舟蓑笠翁","独钓寒江雪"],
    info:"这首诗描写了雪天钓鱼的孤独老翁，实为诗人被贬后孤傲清高精神的自我写照，意境极为深远。"
  },
  {
    title:"山行", author:"杜牧", dynasty:"唐",
    lines:["远上寒山石径斜","白云深处有人家","停车坐爱枫林晚","霜叶红于二月花"],
    info:"此诗描绘了秋日山中的美丽景色，以"霜叶红于二月花"一句将秋日枫林写得比春花更美，令人叫绝。"
  },
  {
    title:"望庐山瀑布", author:"李白", dynasty:"唐",
    lines:["日照香炉生紫烟","遥看瀑布挂前川","飞流直下三千尺","疑是银河落九天"],
    info:"此诗描写庐山瀑布，以奇特夸张的想象力，将瀑布比作银河坠落，体现了李白浪漫主义诗风。"
  },
  {
    title:"早发白帝城", author:"李白", dynasty:"唐",
    lines:["朝辞白帝彩云间","千里江陵一日还","两岸猿声啼不住","轻舟已过万重山"],
    info:"李白遇赦后喜悦之情溢于言表，描写轻舟顺流而下，速度之快，心情之畅，跃然纸上。"
  },
  {
    title:"赠汪伦", author:"李白", dynasty:"唐",
    lines:["李白乘舟将欲行","忽闻岸上踏歌声","桃花潭水深千尺","不及汪伦送我情"],
    info:"这首诗是李白为答谢友人汪伦而作，以深千尺的桃花潭水衬托友情之深，情真意切。"
  },
  {
    title:"望天门山", author:"李白", dynasty:"唐",
    lines:["天门中断楚江开","碧水东流至此回","两岸青山相对出","孤帆一片日边来"],
    info:"此诗描写天门山的雄奇景象，以动写静，气势磅礴，展现了长江的壮丽与诗人开阔的胸怀。"
  },
  {
    title:"绝句", author:"杜甫", dynasty:"唐",
    lines:["两个黄鹂鸣翠柳","一行白鹭上青天","窗含西岭千秋雪","门泊东吴万里船"],
    info:"杜甫寓居成都草堂时所作，以鲜明的色彩对比勾勒出一幅明媚的春日图，充满盎然生机。"
  },
  {
    title:"春夜喜雨", author:"杜甫", dynasty:"唐",
    lines:["好雨知时节","当春乃发生","随风潜入夜","润物细无声"],
    info:"此诗以春雨为喻，借物咏情，将春雨的及时、细腻与默默无闻之德表达得淋漓尽致。"
  },
  {
    title:"枫桥夜泊", author:"张继", dynasty:"唐",
    lines:["月落乌啼霜满天","江枫渔火对愁眠","姑苏城外寒山寺","夜半钟声到客船"],
    info:"此诗描写了秋夜停船于苏州枫桥的旅愁，那声悠远的夜半钟声令无数旅人感同身受。"
  },
  {
    title:"九月九日忆山东兄弟", author:"王维", dynasty:"唐",
    lines:["独在异乡为异客","每逢佳节倍思亲","遥知兄弟登高处","遍插茱萸少一人"],
    info:"王维17岁所作，描述重阳节客居他乡的游子思念家乡亲人之情，是传诵千古的思乡名作。"
  },
  {
    title:"鸟鸣涧", author:"王维", dynasty:"唐",
    lines:["人闲桂花落","夜静春山空","月出惊山鸟","时鸣春涧中"],
    info:"此诗以动衬静，以春山的幽静空灵为背景，月出鸟鸣更显山野之宁静，充满禅意。"
  },
  {
    title:"出塞", author:"王昌龄", dynasty:"唐",
    lines:["秦时明月汉时关","万里长征人未还","但使龙城飞将在","不教胡马度阴山"],
    info:"这首七言绝句是唐诗边塞诗的代表作，充分展现了保家卫国的豪迈气概和爱国精神。"
  },
  {
    title:"凉州词", author:"王翰", dynasty:"唐",
    lines:["葡萄美酒夜光杯","欲饮琵琶马上催","醉卧沙场君莫笑","古来征战几人回"],
    info:"此诗以边塞将士出征前夜的豪饮为题，悲中有壮，表达了将士们对生死的豁达态度。"
  },
  {
    title:"回乡偶书", author:"贺知章", dynasty:"唐",
    lines:["少小离家老大回","乡音无改鬓毛衰","儿童相见不相识","笑问客从何处来"],
    info:"贺知章晚年辞官回乡，少小出门，老大归来，物是人非，以儿童的"笑问"传达出深沉的感慨。"
  },
  {
    title:"题西林壁", author:"苏轼", dynasty:"宋",
    lines:["横看成岭侧成峰","远近高低各不同","不识庐山真面目","只缘身在此山中"],
    info:"苏轼游庐山所作，以看山喻哲理：当局者迷，旁观者清，富含辩证思想，是宋诗的哲理名作。"
  },
  {
    title:"饮湖上初晴后雨", author:"苏轼", dynasty:"宋",
    lines:["水光潋滟晴方好","山色空蒙雨亦奇","欲把西湖比西子","淡妆浓抹总相宜"],
    info:"苏轼将西湖比作西施，无论晴雨皆美，一个绝妙的比喻成就了西湖"西子湖"的别名。"
  },
  {
    title:"梅花", author:"王安石", dynasty:"宋",
    lines:["墙角数枝梅","凌寒独自开","遥知不是雪","为有暗香来"],
    info:"王安石以凌寒绽放的梅花自比，表达了不屈不挠、坚守本心的高洁精神，托物言志。"
  },
  {
    title:"示儿", author:"陆游", dynasty:"宋",
    lines:["死去元知万事空","但悲不见九州同","王师北定中原日","家祭无忘告乃翁"],
    info:"陆游临终前的绝笔，平生念念不忘收复失地，家国情怀溢满全诗，令人动容。"
  },
  {
    title:"秋夜将晓出篱门迎凉有感", author:"陆游", dynasty:"宋",
    lines:["三万里河东入海","五千仞岳上摩天","遗民泪尽胡尘里","南望王师又一年"],
    info:"陆游描写沦陷区遗民的悲苦，望眼欲穿盼着宋军北伐，字字饱含深情与无奈。"
  },
  {
    title:"小池", author:"杨万里", dynasty:"宋",
    lines:["泉眼无声惜细流","树阴照水爱晴柔","小荷才露尖尖角","早有蜻蜓立上头"],
    info:"此诗以清新的笔触描写了初夏小荷的娇嫩，蜻蜓立于荷尖，画面生动可爱，充满童趣。"
  },
  {
    title:"晓出净慈寺送林子方", author:"杨万里", dynasty:"宋",
    lines:["毕竟西湖六月中","风光不与四时同","接天莲叶无穷碧","映日荷花别样红"],
    info:"描写六月西湖荷花的盛景，色彩浓烈，气势恢宏，以送别为题却全写风景，意趣盎然。"
  },
  {
    title:"春日", author:"朱熹", dynasty:"宋",
    lines:["胜日寻芳泗水滨","无边光景一时新","等闲识得东风面","万紫千红总是春"],
    info:"此诗表面写踏春寻芳，实则以春天比喻新学新气象，"万紫千红总是春"意境极为开阔。"
  },
  {
    title:"游园不值", author:"叶绍翁", dynasty:"宋",
    lines:["应怜屐齿印苍苔","小扣柴扉久不开","春色满园关不住","一枝红杏出墙来"],
    info:"诗人春日游园不遇主人，却以出墙红杏感受满园春色，"关不住"的春色成为千古名句。"
  },
  {
    title:"望岳", author:"杜甫", dynasty:"唐",
    lines:["岱宗夫如何","齐鲁青未了","造化钟神秀","阴阳割昏晓","荡胸生曾云","决眦入归鸟","会当凌绝顶","一览众山小"],
    info:"杜甫年轻时游泰山所作，以气势磅礴的笔触描绘泰山雄姿，末句"会当凌绝顶，一览众山小"成为励志名句。"
  },
  {
    title:"送杜少府之任蜀州", author:"王勃", dynasty:"唐",
    lines:["城阙辅三秦","风烟望五津","与君离别意","同是宦游人","海内存知己","天涯若比邻","无为在歧路","儿女共沾巾"],
    info:""海内存知己，天涯若比邻"是千古友情的最美表达，王勃以豁达情怀化离别之苦为深情壮语。"
  },
  {
    title:"咏柳", author:"贺知章", dynasty:"唐",
    lines:["碧玉妆成一树高","万条垂下绿丝绦","不知细叶谁裁出","二月春风似剪刀"],
    info:"此诗将柳树比作碧玉，将春风比作剪刀，生动描绘了柳树的婀娜，充满奇思妙想。"
  },
  {
    title:"望洞庭", author:"刘禹锡", dynasty:"唐",
    lines:["湖光秋月两相和","潭面无风镜未磨","遥望洞庭山水翠","白银盘里一青螺"],
    info:"刘禹锡以银盘青螺喻洞庭山水，精妙绝伦，将宏阔洞庭湖描绘得如一件精致的艺术品。"
  },
  {
    title:"浪淘沙", author:"刘禹锡", dynasty:"唐",
    lines:["九曲黄河万里沙","浪淘风簸自天涯","如今直上银河去","同到牵牛织女家"],
    info:"以黄河之波澜壮阔起笔，展开浪漫联想，顺流而上直达银河，豪气干云，充满奇思。"
  },
  {
    title:"乌衣巷", author:"刘禹锡", dynasty:"唐",
    lines:["朱雀桥边野草花","乌衣巷口夕阳斜","旧时王谢堂前燕","飞入寻常百姓家"],
    info:"以燕子视角串联昔日豪门与今日寻常，寄托了深沉的历史沧桑感，是怀古诗的代表作。"
  },
  {
    title:"己亥杂诗", author:"龚自珍", dynasty:"清",
    lines:["浩荡离愁白日斜","吟鞭东指即天涯","落红不是无情物","化作春泥更护花"],
    info:""落红不是无情物，化作春泥更护花"——龚自珍以落花自比，表达了甘愿奉献、继续守护后来者的情怀。"
  },
  {
    title:"竹石", author:"郑燮", dynasty:"清",
    lines:["咬定青山不放松","立根原在破岩中","千磨万击还坚劲","任尔东西南北风"],
    info:"郑板桥借竹子坚韧不拔之性，表达了自己不随世俗、坚守节操的人生态度，是托物言志的典范。"
  },
  {
    title:"石灰吟", author:"于谦", dynasty:"明",
    lines:["千锤万凿出深山","烈火焚烧若等闲","粉骨碎身浑不怕","要留清白在人间"],
    info:"于谦以石灰的烧炼历程自喻，表达了清白做人、不畏艰难的高洁志向，托物言志，令人敬佩。"
  },
  {
    title:"所见", author:"袁枚", dynasty:"清",
    lines:["牧童骑黄牛","歌声振林樾","意欲捕鸣蝉","忽然闭口立"],
    info:"此诗描写牧童捕蝉时的动作神态，充满生活气息，以细腻的观察捕捉了乡村童趣的生动一幕。"
  },
  {
    title:"村居", author:"高鼎", dynasty:"清",
    lines:["草长莺飞二月天","拂堤杨柳醉春烟","儿童散学归来早","忙趁东风放纸鸢"],
    info:"描写早春二月的乡村风光，儿童放风筝的欢乐场面生动活泼，充满浓郁的生活情趣。"
  },
  {
    title:"宿新市徐公店", author:"杨万里", dynasty:"宋",
    lines:["篱落疏疏一径深","树头花落未成阴","儿童急走追黄蝶","飞入菜花无处寻"],
    info:"此诗描绘了田间追蝶的儿童情景，黄蝶飞入菜花中无处可寻，充满天真烂漫的童趣。"
  },
  {
    title:"夏日绝句", author:"李清照", dynasty:"宋",
    lines:["生当作人杰","死亦为鬼雄","至今思项羽","不肯过江东"],
    info:"李清照借项羽宁死不降的精神，讽刺南宋统治者的懦弱，体现了女词人的铮铮铁骨与爱国情怀。"
  }
];

// ===========================
//  GAME STATE
// ===========================
const TOTAL_ROUNDS = 10;
let state = {
  mode: 1,           // 1=fill, 2=scramble, 3=mixed
  score: 0,
  round: 0,
  correct: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
  curMode: 1,        // actual current mode in mixed
  curPoem: null,
  curLineIdx: 0,
  m2Answer: [],      // indexes of chars placed
  m2Chars: [],       // shuffled char list [{char, origIdx}]
};

// ===========================
//  HELPERS
// ===========================
function randInt(n) { return Math.floor(Math.random() * n); }
function pick(arr) { return arr[randInt(arr.length)]; }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = randInt(i+1); [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Get all lines from all poems
function allLines() {
  return POEMS.flatMap(p => p.lines);
}

// Get wrong options (lines from other poems, same or similar length)
function getWrongOptions(correctLine, count) {
  const len = correctLine.length;
  let pool = POEMS.flatMap(p => p.lines)
    .filter(l => l !== correctLine && Math.abs(l.length - len) <= 2);
  pool = shuffle(pool);
  // prefer same length
  const sameLen = pool.filter(l => l.length === len);
  const diff = pool.filter(l => l.length !== len);
  const combined = [...sameLen, ...diff];
  const result = [];
  const seen = new Set([correctLine]);
  for (const l of combined) {
    if (!seen.has(l)) { seen.add(l); result.push(l); }
    if (result.length >= count) break;
  }
  // fallback
  while (result.length < count) result.push(pick(allLines()));
  return result.slice(0, count);
}

// Build couplets from a poem (returns [{upper, lower, upperIdx}])
function buildCouplets(poem) {
  const couplets = [];
  for (let i = 0; i < poem.lines.length - 1; i++) {
    couplets.push({ upper: poem.lines[i], lower: poem.lines[i+1], upperIdx: i });
  }
  return couplets;
}

// ===========================
//  SCREENS
// ===========================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateHUD() {
  document.getElementById('hud-score').textContent = state.score;
  document.getElementById('hud-round').textContent = (state.round) + '/' + TOTAL_ROUNDS;
  document.getElementById('progress1').style.width = (state.round / TOTAL_ROUNDS * 100) + '%';
  document.getElementById('progress2').style.width = (state.round / TOTAL_ROUNDS * 100) + '%';
}

// ===========================
//  MAIN FLOW
// ===========================
function startGame(mode) {
  state = {
    mode, score: 0, round: 0, correct: 0,
    streak: 0, maxStreak: 0, answered: false,
    curMode: mode === 3 ? (randInt(2)+1) : mode,
    curPoem: null, curLineIdx: 0,
    m2Answer: [], m2Chars: []
  };
  document.getElementById('hud').classList.add('visible');
  updateHUD();
  doRound();
}

function doRound() {
  state.round++;
  state.answered = false;
  updateHUD();
  if (state.round > TOTAL_ROUNDS) { endGame(); return; }

  // pick mode for mixed
  if (state.mode === 3) {
    state.curMode = state.round % 2 === 1 ? 1 : 2;
  } else {
    state.curMode = state.mode;
  }

  if (state.curMode === 1) {
    setupMode1();
  } else {
    setupMode2();
  }
}

function nextRound() {
  if (state.round >= TOTAL_ROUNDS) { endGame(); return; }
  doRound();
}

function endGame() {
  document.getElementById('hud').classList.remove('visible');
  showScreen('screen-gameover');
  document.getElementById('go-score').textContent = state.score;
  document.getElementById('go-correct').textContent = state.correct;
  document.getElementById('go-streak').textContent = state.maxStreak;
  const acc = state.round > 0 ? Math.round(state.correct / TOTAL_ROUNDS * 100) : 0;
  document.getElementById('go-accuracy').textContent = acc + '%';

  // High score
  const hs = parseInt(localStorage.getItem('poetry_hs') || '0');
  if (state.score > hs) {
    localStorage.setItem('poetry_hs', state.score);
    document.getElementById('go-highscore-badge').innerHTML = '<div class="highscore-badge">🎉 新纪录！</div>';
  } else {
    document.getElementById('go-highscore-badge').innerHTML = '';
  }
  updateHomeHighScore();
}

function goHome() {
  document.getElementById('hud').classList.remove('visible');
  showScreen('screen-home');
}

function restartGame() {
  startGame(state.mode);
}

function updateHomeHighScore() {
  const hs = parseInt(localStorage.getItem('poetry_hs') || '0');
  document.getElementById('home-highscore').textContent = hs > 0 ? '🏅 历史最高分：' + hs : '';
}

// ===========================
//  MODE 1 — 填下句
// ===========================
function setupMode1() {
  showScreen('screen-mode1');
  document.getElementById('m1-result').classList.remove('open');
  document.getElementById('m1-next').style.display = 'none';

  // pick random poem + couplet
  const poem = pick(POEMS);
  const couplets = buildCouplets(poem);
  const couplet = pick(couplets);
  state.curPoem = poem;
  state.curLineIdx = couplet.upperIdx + 1;

  document.getElementById('m1-prompt').textContent = couplet.upper;

  // build options
  const wrong = getWrongOptions(couplet.lower, 3);
  const options = shuffle([couplet.lower, ...wrong]);

  const container = document.getElementById('m1-options');
  container.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => mode1Select(btn, opt, couplet.lower));
    container.appendChild(btn);
  });
}

function mode1Select(btn, chosen, correct) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = chosen === correct;

  // Disable all
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });
  if (!isCorrect) {
    btn.classList.add('wrong');
    btn.classList.remove('correct');
  }

  awardScore(isCorrect, btn);
  revealPoem('m1', state.curPoem, state.curLineIdx);
  document.getElementById('m1-next').style.display = 'block';
}

// ===========================
//  MODE 2 — 重组诗句
// ===========================
function setupMode2() {
  showScreen('screen-mode2');
  document.getElementById('m2-result').classList.remove('open');
  document.getElementById('m2-next').style.display = 'none';
  document.getElementById('m2-confirm-btn').disabled = false;

  // pick poem + line (prefer 5 or 7 char lines)
  const poem = pick(POEMS);
  const eligibleLines = poem.lines.filter(l => l.length >= 4);
  const line = pick(eligibleLines.length ? eligibleLines : poem.lines);
  state.curPoem = poem;
  state.curLineIdx = poem.lines.indexOf(line);

  // build shuffled chars ensuring different order
  let chars = line.split('').map((c, i) => ({ char: c, origIdx: i, id: i }));
  let shuffled;
  do { shuffled = shuffle(chars); }
  while (shuffled.map(c=>c.char).join('') === line && line.length > 1);
  state.m2Chars = shuffled;
  state.m2Answer = [];

  renderMode2();
  document.getElementById('m2-hint').textContent =
    `这句诗共 ${line.length} 个字，请依次点击字块还原`;
}

function renderMode2() {
  const line = state.curPoem.lines[state.curLineIdx];
  const pool = document.getElementById('m2-char-pool');
  const answerRow = document.getElementById('m2-answer-row');

  // Render answer row
  answerRow.innerHTML = '';
  for (let i = 0; i < line.length; i++) {
    const slot = document.createElement('div');
    if (i < state.m2Answer.length) {
      const charObj = state.m2Chars[state.m2Answer[i]];
      slot.className = 'char-tile in-answer';
      slot.textContent = charObj.char;
      const ansIdx = i;
      slot.addEventListener('click', () => mode2RemoveFromAnswer(ansIdx));
    } else {
      slot.className = 'answer-slot';
      slot.textContent = '';
    }
    answerRow.appendChild(slot);
  }

  // Render char pool
  pool.innerHTML = '';
  const usedIds = new Set(state.m2Answer);
  state.m2Chars.forEach((c, poolIdx) => {
    const tile = document.createElement('div');
    tile.className = 'char-tile' + (usedIds.has(poolIdx) ? ' in-answer' : '');
    tile.textContent = c.char;
    tile.dataset.idx = poolIdx;
    if (!usedIds.has(poolIdx)) {
      tile.addEventListener('click', () => mode2AddToAnswer(poolIdx));
    } else {
      tile.style.opacity = '0.35';
      tile.style.cursor = 'default';
    }
    pool.appendChild(tile);
  });
}

function mode2AddToAnswer(poolIdx) {
  if (state.answered) return;
  const line = state.curPoem.lines[state.curLineIdx];
  if (state.m2Answer.length >= line.length) return;
  state.m2Answer.push(poolIdx);
  renderMode2();
  // auto-check when full
  if (state.m2Answer.length === line.length) {
    setTimeout(mode2Check, 300);
  }
}

function mode2RemoveFromAnswer(ansIdx) {
  if (state.answered) return;
  state.m2Answer.splice(ansIdx, 1);
  renderMode2();
}

function mode2Clear() {
  if (state.answered) return;
  state.m2Answer = [];
  renderMode2();
}

function mode2Check() {
  if (state.answered) return;
  const line = state.curPoem.lines[state.curLineIdx];
  if (state.m2Answer.length < line.length) {
    document.getElementById('m2-hint').textContent = `还差 ${line.length - state.m2Answer.length} 个字哦！`;
    return;
  }
  state.answered = true;
  document.getElementById('m2-confirm-btn').disabled = true;

  const composed = state.m2Answer.map(i => state.m2Chars[i].char).join('');
  const isCorrect = composed === line;

  // Highlight answer row
  const answerSlots = document.getElementById('m2-answer-row').children;
  for (let i = 0; i < answerSlots.length; i++) {
    answerSlots[i].classList.remove('in-answer');
    answerSlots[i].classList.add(isCorrect ? 'correct-tile' : 'wrong-tile');
  }

  awardScore(isCorrect, document.getElementById('m2-answer-row'));
  if (!isCorrect) {
    // show correct answer hint
    document.getElementById('m2-hint').innerHTML =
      '正确答案：<span style="color:var(--red);font-weight:700;letter-spacing:4px">' + line + '</span>';
  }
  revealPoem('m2', state.curPoem, state.curLineIdx);
  document.getElementById('m2-next').style.display = 'block';
}

// ===========================
//  SCORE & REVEAL
// ===========================
function awardScore(isCorrect, refEl) {
  if (isCorrect) {
    state.correct++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    const bonus = Math.min(state.streak - 1, 5) * 10;
    const pts = 100 + bonus;
    state.score += pts;
    updateHUD();
    // floating score
    const rect = refEl.getBoundingClientRect();
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.style.left = (rect.left + rect.width / 2 - 40) + 'px';
    popup.style.top = (rect.top - 30) + 'px';
    popup.textContent = '+' + pts + (state.streak >= 2 ? '  🔥×' + state.streak : '');
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1300);
  } else {
    state.streak = 0;
  }
}

function revealPoem(prefix, poem, highlightIdx) {
  const panel = document.getElementById(prefix + '-result');
  const reveal = document.getElementById(prefix + '-poem-reveal');
  const linesHtml = poem.lines.map((l, i) =>
    `<div class="poem-line${i === highlightIdx ? ' highlight' : ''}">${l}</div>`
  ).join('');
  reveal.innerHTML = `
    <div class="poem-title">《${poem.title}》</div>
    <div class="poem-author">${poem.dynasty} · ${poem.author}</div>
    <div class="poem-lines">${linesHtml}</div>
    <div class="poem-info">${poem.info}</div>
  `;
  setTimeout(() => panel.classList.add('open'), 100);
}

// ===========================
//  INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  updateHomeHighScore();
});
