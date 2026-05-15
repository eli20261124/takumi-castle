// ─── Types ────────────────────────────────────────────────────────────────────

export type CastleKey =
  | "hirosaki"
  | "matsumoto"
  | "maruoka"
  | "inuyama"
  | "hikone"
  | "himeji"
  | "matsue"
  | "bicchu"
  | "marugame"
  | "iyo"
  | "uwajima"
  | "kochi";

export type Designation = "kokuhо̄" | "jūbunka";

export type CastleRegion = "tohoku" | "chubu" | "kansai" | "chugoku" | "shikoku";

export type CastleContent = {
  id: CastleKey;
  region: CastleRegion;
  nameJP: string;
  nameCH: string;
  nameEN: string;
  clan: string;
  clanCH: string;
  prefecture: string;
  prefectureCH: string;
  year: string;
  designation: Designation;
  tiers: number; // number of tower tiers
  markdown: string;    // Japanese description
  markdownZH: string;  // Traditional Chinese description
  markdownEN: string;  // English description
};

export type ArchLabCategory = "hafu" | "tiles" | "ishigaki" | "defense";

export type ArchLabItem = {
  id: string;
  category: ArchLabCategory;
  termJP: string;
  termCH: string;
  description: string;
  castles: CastleKey[];
};

export type KamonEntry = {
  clan: string;
  clanCH: string;
  period: string;
  kamonKey: string;
};

export type KamonTimeline = {
  castleId: CastleKey;
  nameJP: string;
  nameCH: string;
  entries: KamonEntry[];
};

export type ReferenceItem = {
  id: number;
  title: string;
  source: string;
  url: string;
};

// ─── 12 Castles (North → South) ──────────────────────────────────────────────

export const castles: CastleContent[] = [
  {
    id: "hirosaki",
    region: "tohoku",
    nameJP: "弘前城",
    nameCH: "弘前城",
    nameEN: "Hirosaki Castle",
    clan: "津軽氏",
    clanCH: "津輕氏",
    prefecture: "青森県",
    prefectureCH: "青森縣",
    year: "1611",
    designation: "jūbunka",
    tiers: 3,
    markdown: `弘前城は1611年（慶長16年）に津軽信枚によって築城された。現存天守の中で唯一の東北地方の天守であり、三層三階の小型天守ながら、北方の厳冬に耐えうる堅固な石垣と急勾配の屋根を持つ。\n\n城内の石垣は打込ハギ工法で積まれており、青森県産の花崗岩が使用されている。千鳥破風と唐破風が複合的に配置された屋根は、津輕地方における大工技術の粋を示している。[1]`,
    markdownZH: `弘前城建於1611年（慶長十六年），由津輕信枚築城，是東北地方唯一現存的江戶時代天守。三層三階的小型天守雖規模不大，卻以其精緻的千鳥破風與唐破風組合著稱，屋頂陡峻，以應對北方嚴冬積雪。\n\n城內石垣採打込接工法，使用青森縣產花崗岩砌築，歷經四百年風雪依然穩固。今日弘前公園以春季吉野櫻聞名全國，天守倒映於護城河之上，是北方城郭風情的最佳詮釋。[1]`,
    markdownEN: `Hirosaki Castle was built in 1611 by Tsugaru Nobuhira, making it the only surviving Edo-period castle keep in the Tōhoku region. The compact three-tiered tower bears steeply pitched roofs designed to shed the heavy snows of Aomori's winters.\n\nIts stone walls are constructed using the uchibose-hagi technique with locally quarried granite. A combination of chidori-hafu and kara-hafu gables gives the keep an intricate roof silhouette. Today the castle grounds are celebrated for spring cherry blossoms, where the keep's reflection shimmers in the surrounding moat. [1]`,
  },
  {
    id: "matsumoto",
    region: "chubu",
    nameJP: "松本城",
    nameCH: "松本城",
    nameEN: "Matsumoto Castle",
    clan: "石川氏 / 戸田氏",
    clanCH: "石川氏 / 戶田氏",
    prefecture: "長野県",
    prefectureCH: "長野縣",
    year: "1594",
    designation: "kokuhо̄",
    tiers: 6,
    markdown: `松本城は信州松本に聳える烏城（からすじょう）——その漆黒の外壁は、戦国時代の防禦哲学を体現する。天守は六層六階の複合天守で、現存天守の中で最古の五重天守に次ぐ古さを誇る。\n\n石垣は打込ハギ工法を基本とし、算木積の隅角が際立つ。大天守頂部には黒漆塗の鯱鉾が載り、月見櫓との複合体は平和な江戸時代の風雅さをも示す。三階菱（小笠原氏の家紋）は城の至所に意匠として刻まれている。[2][3]`,
    markdownZH: `松本城以「烏城」之名聞名——全身黑色的木板外壁使其在雪景中格外醒目。建於1594至1597年間，是現存最古老的五重天守之一。六層六階的複合天守由大天守、乾小天守、辰巳附櫓與月見櫓組成，集戰時功能與太平盛世的風雅於一體。\n\n石垣採算木積隅角工法，底部野面積、上部打込接，展現了桃山時代至江戶時代的技術演變。大天守頂部黑漆銅鯱是其最具辨識性的標誌，三階菱家紋遍布城內裝飾細部。[2][3]`,
    markdownEN: `Matsumoto Castle — known as Karasu-jō, "Crow Castle" — rises in striking black from the Nagano plain. Built between 1594 and 1597, it is one of the oldest surviving five-tiered keeps in Japan.\n\nThe complex comprises a main tenshu, a secondary northwest tower, a southeast addition, and an elegant moon-viewing turret added during peaceful Edo times. The ishigaki walls display masterful san-gi-zumi corner stacking, with rough-set lower courses giving way to tighter fitted stonework above. The black lacquered bronze shachi finials crown the keep with unmistakable authority. [2][3]`,
  },
  {
    id: "maruoka",
    region: "chubu",
    nameJP: "丸岡城",
    nameCH: "丸岡城",
    nameEN: "Maruoka Castle",
    clan: "本多氏",
    clanCH: "本多氏",
    prefecture: "福井県",
    prefectureCH: "福井縣",
    year: "1576",
    designation: "jūbunka",
    tiers: 3,
    markdown: `丸岡城は天正4年（1576年）に柴田勝家の甥・勝豊によって築かれたとされ、現存最古級の天守として知られる「霞ヶ城」の別名を持つ。\n\n最大の特徴は屋根瓦——全面に敷かれた笏谷石（しゃくだにいし）製の石瓦である。凝灰岩製のこの瓦は重量があるため勾配を緩くせざるを得ず、独特の重厚な外観を生む。野面積の石垣と相まって、この城は最も古拙な石垣積みの様式を今に伝える貴重な遺構である。[4]`,
    markdownZH: `丸岡城建於天正四年（1576年），相傳由柴田勝豊所築，以「霞ヶ城」之別稱著稱，是日本現存最古老的天守之一。最獨特之處在於其石瓦屋頂——以福井縣產笏谷石（凝灰岩）製成的石製瓦片沉重而防火，因瓦片重量而形成獨特的緩坡屋頂輪廓。\n\n石垣採野面積工法，外觀古拙粗獷，充分反映了戰國時代初期城郭建築的原始風貌。這是日本城郭建築史上最珍貴的活化石之一。[4]`,
    markdownEN: `Maruoka Castle, built in 1576, is regarded as one of Japan's oldest surviving castle keeps, earning the poetic name "Kasumi-ga-jō" — Castle in the Mist. Its most distinctive feature is its stone-tile roof, clad entirely in heavy shakudanishi tuff shingles quarried in Fukui.\n\nThe weight of these tiles necessitated a gentler roof pitch than typical for the period, giving the keep its characteristically brooding silhouette. The rough-hewn nozura-zumi stone walls below complete a picture of early Sengoku-era fortification at its most raw and unembellished. [4]`,
  },
  {
    id: "inuyama",
    region: "chubu",
    nameJP: "犬山城",
    nameCH: "犬山城",
    nameEN: "Inuyama Castle",
    clan: "成瀬氏",
    clanCH: "成瀨氏",
    prefecture: "愛知県",
    prefectureCH: "愛知縣",
    year: "1537",
    designation: "kokuhо̄",
    tiers: 4,
    markdown: `犬山城は木曽川の断崖に聳え、「白帝城」の雅号を持つ。天文6年（1537年）の築城とも伝わり、現存天守の中でも屈指の古さを誇る。四層四階の天守は、最上層に廻縁（回り廊下）を持つ「望楼型」の原型的形式を示す。\n\n成瀬氏は1617年から明治維新まで250年以上にわたって城主を務め、その安定した治世が天守の保存に大きく貢献した。最上層の高欄（高欄廻縁）は他の天守には見られない特徴的な意匠であり、眼下の木曽川を一望できる。[5]`,
    markdownZH: `犬山城聳立於木曽川斷崖之上，雅號「白帝城」，典出中國詩聖李白之詩句。天文六年（1537年）始建，是現存天守中建造年代最古的一批。四層四階的天守為「望樓型」的典型代表，最高層設有迴廊（高欄廻縁），可俯瞰木曽川全景，是其他現存天守所未見的獨特形制。\n\n成瀨氏自1617年至明治維新，連續二百五十餘年治理此城，其安定的藩政使天守得以完好傳世。最高層迴廊是江戶時代城郭中極罕見的公開觀景設施。[5]`,
    markdownEN: `Perched on a cliff above the Kiso River, Inuyama Castle bears the classical epithet "Hakutei-jō" — White Emperor Castle — borrowed from a poem by the Tang poet Li Bai. Dating to 1537, it stands among the oldest surviving keeps in Japan.\n\nIts four-tiered bōrō-gata (watchtower) form — the earliest main tenshu style — features a characteristic open veranda with ornamental railings on the top floor, unique among all existing keeps. The Naruse clan governed the castle for over 250 years from 1617 to the Meiji Restoration, their steady stewardship preserving the structure intact. [5]`,
  },
  {
    id: "hikone",
    region: "kansai",
    nameJP: "彦根城",
    nameCH: "彦根城",
    nameEN: "Hikone Castle",
    clan: "井伊氏",
    clanCH: "井伊氏",
    prefecture: "滋賀県",
    prefectureCH: "滋賀縣",
    year: "1622",
    designation: "kokuhо̄",
    tiers: 3,
    markdown: `彦根城は慶長9年（1604年）より着工し、1622年に完成した。徳川四天王の一家・井伊氏が幕末まで260年以上にわたって領有し続けた「不変」の象徴である。\n\n天守は三重三階の複合天守で、附櫓・多門櫓が接続する複雑な構成を持つ。唐破風・入母屋破風・切妻破風が重なり合う屋根は、彦根城最大の見所である。石垣は切込ハギ工法の精緻な仕上がりで、枡形虎口と合わせて、江戸初期の城郭防禦技術の完成形を示す。[6][7]`,
    markdownZH: `彦根城自慶長九年（1604年）動工，歷十八年至1622年落成，是德川幕府初期城郭建築技術的集大成之作。井伊氏在此屹立二百六十餘年，從未易主，是江戶時代政治穩定的最佳象徵。\n\n三重三階的複合天守屋頂匯集唐破風、入母屋破風與切妻破風三種形式，層疊交錯，壯觀非凡。石垣採切込接工法精心砌就，算木積隅角工藝尤為精緻。枡形虎口的防禦體系配合附櫓、多門櫓的複合構成，使彦根城成為江戶初期軍事建築的最高典範。[6][7]`,
    markdownEN: `Hikone Castle, begun in 1604 and completed in 1622, stands as one of the finest achievements of early Edo-period castle architecture. The Ii clan — among the Tokugawa's most loyal warrior families — held it unbroken for over 260 years, making it a symbol of the era's political stability.\n\nThe three-tiered compound keep layers kara-hafu, irimoya-hafu, and kirizuma-hafu gables in a breathtakingly complex roof composition. Its precisely cut ishigaki walls and san-gi-zumi corner technique represent Edo-era masonry at its peak, while the masugata-koguchi gate enclosure demonstrates the period's most sophisticated defensive planning. [6][7]`,
  },
  {
    id: "himeji",
    region: "kansai",
    nameJP: "姫路城",
    nameCH: "姬路城",
    nameEN: "Himeji Castle",
    clan: "池田氏 / 本多氏 / 松平氏",
    clanCH: "池田氏 / 本多氏 / 松平氏",
    prefecture: "兵庫県",
    prefectureCH: "兵庫縣",
    year: "1609",
    designation: "kokuhо̄",
    tiers: 7,
    markdown: `姫路城は「白鷺城」——その白漆喰塗籠の壁面と多層の破風群は、日本城郭建築の最高傑作として1993年にユネスコ世界遺産に登録された。\n\n大天守（七層六階）を中心に東西南北の小天守が渡櫓で連結される「連立式天守」の代表例。千鳥破風・唐破風・入母屋破風・軒唐破風が幾層にも重なる複雑な屋根構成は他の追随を許さない。石垣は切込ハギの精緻な仕上げで、算木積の隅角処理が際立つ。狭間・石落・枡形虎口・多門櫓など防禦機関の種類も最多。[8][9]`,
    markdownZH: `姬路城——白鷺城，是日本城郭建築的最高峰，1993年被列入聯合國教科文組織世界遺產。七層大天守配合東、西、乾三小天守，以渡櫓連成「連立式天守」，在日本城郭中規模最為宏大。\n\n白灰泥塗籠外壁兼具防火與美觀功能，其上千鳥破風、唐破風、入母屋破風與軒唐破風層疊而上，構成日本城郭中最複雜的屋頂體系。石垣以切込接精工砌築，算木積隅角整齊劃一。城內各式狹間、石落、射擊孔、枡形虎口等防禦設施齊備，堪稱江戶城郭防禦之百科全書。[8][9]`,
    markdownEN: `Himeji Castle — the White Egret Castle — is the supreme masterpiece of Japanese castle architecture and the country's finest surviving feudal fortress, designated a UNESCO World Heritage Site in 1993.\n\nThe main seven-story tenshu is linked to three smaller keeps by covered corridors, forming Japan's most celebrated compound keep arrangement. The white lime-plaster walls bear the most elaborate accumulation of hafu gables in existence: chidori, kara, irimoya, and noki-kara gables in towering succession. Every variety of defensive aperture, loophole, and stone-drop chute is present in abundance — an encyclopaedia of Edo-period defensive architecture. [8][9]`,
  },
  {
    id: "matsue",
    region: "chugoku",
    nameJP: "松江城",
    nameCH: "松江城",
    nameEN: "Matsue Castle",
    clan: "松平氏（越前）",
    clanCH: "松平氏（越前）",
    prefecture: "島根県",
    prefectureCH: "島根縣",
    year: "1611",
    designation: "kokuhо̄",
    tiers: 5,
    markdown: `松江城は宍道湖畔に聳える山陰地方唯一の現存天守であり、2015年に国宝に指定された。五層六階の大型天守は、外観は黒い板張りの腰巻（下層の下見板張り）が特徴的で、「黒い天守」として知られる。\n\n慶長16年（1611年）の竣工以来、松平氏が長期にわたって治めた。内部には武具収蔵のための棚や武者走りが良好な状態で残り、実戦的な城の機能を今に伝える。石垣は打込ハギ工法で、宍道湖からの湿気に耐えうる堅固な構造を持つ。[10]`,
    markdownZH: `松江城矗立於宍道湖畔，是山陰地方唯一的現存天守，2015年正式獲指定為國寶。五層六階的大天守外壁採黑色下見板張（腰板外壁），使其有別於白色系天守，以「黑い天守」之名為人稱道。\n\n慶長十六年（1611年）竣工以來，松平氏（越前系）長期治理，保存完好。天守內部武者走和武具棚等實戰設施保存狀態極佳，使參觀者得以親身感受江戶城郭的實戰功能。石垣採打込接工法砌築，以應對宍道湖濕潤氣候的長年侵蝕。[10]`,
    markdownEN: `Matsue Castle, the only surviving tenshu in the San'in region, stands beside Lake Shinjiko and was designated a National Treasure in 2015. Its five-story keep is distinguished by broad black wooden siding on the lower stories — a practical weatherproofing choice against the region's persistent coastal dampness.\n\nCompleted in 1611, the castle was long governed by the Matsudaira clan. The interior retains an unusual number of original fixtures — weapon racks, samurai corridors, and defensive stairs — offering an unusually vivid sense of the keep as a working fortress rather than a ceremonial monument. [10]`,
  },
  {
    id: "bicchu",
    region: "chugoku",
    nameJP: "備中松山城",
    nameCH: "備中松山城",
    nameEN: "Bicchū-Matsuyama Castle",
    clan: "板倉氏",
    clanCH: "板倉氏",
    prefecture: "岡山県",
    prefectureCH: "岡山縣",
    year: "1683",
    designation: "jūbunka",
    tiers: 2,
    markdown: `備中松山城は標高430mの臥牛山山頂に立つ、現存唯一の山岳天守（山城）である。雲海に浮かぶ姿は「天空の山城」と称され、秋から冬にかけての早朝に見られる。\n\n天守は二重二階と附櫓からなる小規模なものだが、岩盤に直接積まれた野面積の石垣と急峻な地形が最大の防禦となっていた。1683年に水谷氏の断絶後に板倉氏が入り、現在の姿に整備された。[11]`,
    markdownZH: `備中松山城踞於標高430公尺的臥牛山頂，是日本現存唯一的山岳天守（山城）。深秋至初冬的清晨，雲海漫漫，天守若隱若現，被譽為「天空の山城」，是日本最具神秘氣韻的城郭景觀之一。\n\n二重二階的天守規模雖小，但其直接砌於天然岩盤上的野面積石垣、與陡峭地形相輔相成的防禦體系，使得攻方難以仰攻。1683年水谷氏絕嗣後，板倉氏入主，整修後形成今日所見的面貌。[11]`,
    markdownEN: `Bicchū-Matsuyama Castle crowns Mount Gagyū at 430 metres above sea level, making it the only surviving mountain-top tenshu in Japan. On autumn and winter mornings, the keep floats above a sea of cloud — earning it the name "Castle in the Sky."\n\nThough the two-story keep is modest in scale, the castle's true defence lay in its setting: rough nozura-zumi stone walls built directly onto exposed bedrock, and precipitous slopes that made assault from below nearly impossible. Following the extinction of the Mizutani clan in 1683, the Itakura clan took possession and completed the castle in its present form. [11]`,
  },
  {
    id: "marugame",
    region: "shikoku",
    nameJP: "丸亀城",
    nameCH: "丸亀城",
    nameEN: "Marugame Castle",
    clan: "京極氏",
    clanCH: "京極氏",
    prefecture: "香川県",
    prefectureCH: "香川縣",
    year: "1660",
    designation: "jūbunka",
    tiers: 3,
    markdown: `丸亀城はその壮大な石垣で名高い——「扇の勾配」と称される曲線美を持つ石垣は高さ約60mに達し、現存する石垣としては日本最高を誇る。この見事な布積・算木積の組み合わせは江戸初期の石垣技術の極地を示す。\n\n天守は三層三階の小ぶりな構造で、石垣の雄大さとの対比が独特の景観を生む。京極氏は1615年以降、丸亀を治め続けた。[12]`,
    markdownZH: `丸亀城以其雄偉石垣聞名天下。那道被稱作「扇の勾配」的曲線石垣，自基部至頂部以優美弧線緩緩收束，全高達60公尺，是日本現存石垣中高度最高者。下部布積、上部算木積的複合工法使石垣兼具美觀與穩定性，是江戶初期石垣技術的頂點。\n\n天守本身三層三階，體量相對小巧，與石垣的宏大氣魄形成強烈對比，反而更加突顯出石垣的壯觀。京極氏自1615年入主以來持續治理，使此城成為四國政治版圖的重要支點。[12]`,
    markdownEN: `Marugame Castle is renowned above all for its spectacular stone walls. The signature "ōgi-no-kōbai" — fan-shaped curve — describes the elegant concave profile of the ishigaki, which rises to nearly 60 metres, the tallest surviving castle stone walls in Japan.\n\nThe lower courses are laid in nunobiki-zumi pattern while the upper courses shift to precise san-gi-zumi corner stacking — together representing a pinnacle of early Edo masonry. The three-tiered keep itself is compact, creating a striking counterpoint: a delicate tower perched atop a massive, sweeping plinth of stone. [12]`,
  },
  {
    id: "iyo",
    region: "shikoku",
    nameJP: "伊予松山城",
    nameCH: "伊予松山城",
    nameEN: "Iyo-Matsuyama Castle",
    clan: "松平氏（久松）",
    clanCH: "松平氏（久松）",
    prefecture: "愛媛県",
    prefectureCH: "愛媛縣",
    year: "1854",
    designation: "jūbunka",
    tiers: 3,
    markdown: `伊予松山城は勝山山頂（標高132m）に聳え、四国唯一の連立式天守を持つ。現存天守は1854年に再建されたものだが、連立式の縄張りは17世紀の形式を忠実に継承している。\n\n松平（久松）氏による長期統治の下、現在も保存状態良好な小天守群・隅櫓・渡櫓が残り、城郭の総合的な防禦体系を体感できる数少ない遺構となっている。[10]`,
    markdownZH: `伊予松山城聳立於勝山山頂（海拔132公尺），是四國唯一的連立式天守，亦是日本海拔最高的城郭之一。現存天守建於1854年（安政元年），是安政大地震後重建之作，但其連立式縄張格局嚴格遵循了十七世紀的傳統。\n\n松平（久松）氏長期統治使小天守群、隅櫓、渡櫓等配套設施悉數留存，今日仍可在此完整感受連立式防禦體系的立體構成，是全國現存城郭中最為完整的例子之一。[10]`,
    markdownEN: `Iyo-Matsuyama Castle occupies the summit of Mount Katsuyama (132 m) and is the only surviving compound tenshu arrangement in Shikoku. The present main keep dates to 1854 reconstruction, faithfully replicating the original 17th-century layout.\n\nUnder the long governance of the Matsudaira (Hisamatsu) clan, the full ensemble of secondary keeps, corner towers, and covered corridors survived intact, offering visitors one of Japan's most complete experiences of a compound castle's three-dimensional defensive logic in operation. [10]`,
  },
  {
    id: "uwajima",
    region: "shikoku",
    nameJP: "宇和島城",
    nameCH: "宇和島城",
    nameEN: "Uwajima Castle",
    clan: "伊達氏（宇和島）",
    clanCH: "伊達氏（宇和島）",
    prefecture: "愛媛県",
    prefectureCH: "愛媛縣",
    year: "1666",
    designation: "jūbunka",
    tiers: 3,
    markdown: `宇和島城は仙台伊達氏の支流・宇和島伊達氏の居城として、江戸時代を通じて維持された。三層三階の天守は独立式で、各層が外観上ほぼ同じ大きさという均整のとれた姿が特徴的である。\n\n石垣は切込ハギと打込ハギを混用し、海城としての立地に合わせた潮風対策が施されている。竹に雀（伊達氏の家紋）の意匠が細部に刻まれており、奥州伊達氏との精神的つながりを示す。[5]`,
    markdownZH: `宇和島城是仙台伊達氏支流——宇和島伊達氏的居城，其三層三階獨立式天守以各層外觀比例幾乎相同著稱，形成一種罕見的均衡之美。石垣混用切込接與打込接兩種工法，並針對海城濕鹹環境採用特殊防潮措施。\n\n竹に雀（竹雀紋）這一伊達氏家紋，在城內各細部裝飾中若隱若現，無聲訴說著此城與奧州伊達本家之間的精神紐帶。天守建於1666年（寬文六年），今日仍以其靜雅風姿俯瞰宇和島灣。[5]`,
    markdownEN: `Uwajima Castle served as the seat of the Uwajima Date clan, a branch of the celebrated Sendai Date lineage. Its three-tiered, independent-style keep is distinguished by remarkably even proportions between each story — an unusual visual balance that gives the tower a composed, meditative character.\n\nThe stone walls combine both tighter-cut and intermediate-fitted masonry, adapted to withstand the salt air of its coastal setting. The clan's kamon — bamboo and sparrow — appears as a motif throughout the keep's decorative details, affirming the castle's spiritual bond to the great Date house of Ōshu. [5]`,
  },
  {
    id: "kochi",
    region: "shikoku",
    nameJP: "高知城",
    nameCH: "高知城",
    nameEN: "Kōchi Castle",
    clan: "山内氏",
    clanCH: "山內氏",
    prefecture: "高知県",
    prefectureCH: "高知縣",
    year: "1753",
    designation: "jūbunka",
    tiers: 4,
    markdown: `高知城は日本で唯一、天守・本丸御殿・追手門・廊下門が現存する城郭である。山内一豊が土佐入国後に築いた城の後継として、1753年の火災後に再建された現天守は、江戸中期の建築技術と機能美を示す。\n\n四層六階の天守は最上層に廻縁を持ち、入母屋造の大屋根に千鳥破風が組み合わされる。多門櫓が本丸を取り囲む構成は、四国最大規模の城郭防禦体系を形成している。[12]`,
    markdownZH: `高知城是日本唯一天守、本丸御殿、追手門與廊下門四大核心建築同時現存的城郭，其完整性在全國獨一無二。山內一豊入主土佐後所建之城在1727年遭大火焚毀，1753年重建落成，今存天守為江戶中期建築的精品。\n\n四層六階的天守頂層設有廻廊，入母屋造大屋根配合千鳥破風，氣勢雄渾。多門櫓環繞本丸一周，形成四國最完整的本丸防禦體系，使高知城成為研究江戶城郭整體防禦布局的無價標本。[12]`,
    markdownEN: `Kochi Castle holds a distinction unique among all surviving Japanese castles: it is the only site where the tenshu (main keep), hon-maru goten (lord's palace), ōte-mon (main gate), and rōka-mon (corridor gate) all survive together intact.\n\nThe present keep, rebuilt in 1753 after fire, represents the refined castle architecture of mid-Edo Japan. The four-story tenshu features a top-floor veranda and a dramatic irimoya-hafu main roof. A continuous multi-gate corridor encircles the hon-maru, forming Shikoku's most complete original defensive enclosure — an irreplaceable record of how a full castle complex once functioned as a unified system. [12]`,
  },
];

// ─── Architect's Lab ─────────────────────────────────────────────────────────

export const archLabItems: ArchLabItem[] = [
  // ── 破風 HAFU (Gables) ──────────────────────────────────────────────────────
  {
    id: "chidori",
    category: "hafu",
    termJP: "千鳥破風",
    termCH: "千鳥破風",
    description:
      "以切妻（懸山）造型突出於屋頂斜面的小型三角山牆。形似千鳥展翅，得名於此。為天守提供開窗採光、排煙及裝飾功能，是演武場外最重要的視覺元素。",
    castles: ["himeji", "hikone", "matsumoto", "hirosaki", "kochi"],
  },
  {
    id: "kara",
    category: "hafu",
    termJP: "唐破風",
    termCH: "唐破風",
    description:
      "曲線型山牆，中央隆起、兩端下垂，輪廓呈弓形。源自中國建築審美，透過禪宗寺院傳入日本城郭。多置於天守玄關或重要出入口，彰顯大名威儀。",
    castles: ["himeji", "hikone", "matsumoto", "inuyama"],
  },
  {
    id: "irimoya",
    category: "hafu",
    termJP: "入母屋破風",
    termCH: "入母屋破風",
    description:
      "歇山頂（廡殿頂與懸山頂的複合）於前後形成的大型三角山牆。結合四面排水與正面山牆裝飾，是天守最具氣勢的屋頂形式，常見於最高層大屋頂。",
    castles: ["himeji", "matsue", "kochi", "hikone", "iyo"],
  },
  {
    id: "kirizuma",
    category: "hafu",
    termJP: "切妻破風",
    termCH: "切妻破風（懸山頂）",
    description:
      "最基本的兩坡頂山牆，不帶曲線修飾。常見於較小層數或附櫓，結構簡潔、施工效率高。丸岡城天守主要採用此形式，體現初期天守的樸素風格。",
    castles: ["maruoka", "marugame", "bicchu"],
  },
  {
    id: "noki-kara",
    category: "hafu",
    termJP: "軒唐破風",
    termCH: "軒唐破風",
    description:
      "設置於屋檐線高度（而非屋頂斜面突出）的唐破風。由於位置在屋簷正面，視覺效果更為突出，常作為重要入口的裝飾框架，姫路城天守入口為最典型範例。",
    castles: ["himeji", "inuyama"],
  },
  // ── 瓦與頂 TILES & FINIALS ──────────────────────────────────────────────────
  {
    id: "shachihoko",
    category: "tiles",
    termJP: "鯱鉾",
    termCH: "鯱鉾（虎頭魚尾獸）",
    description:
      "置於大棟兩端的想像神獸——虎頭魚身、背鰭竦立。傳說鯱能呼雨滅火，故置於天守頂部作為防火護符。松本城的黒鯱（銅製）與名古屋城的金鯱是最著名的對比——前者象徵戰國武家氣概，後者代表江戶幕府的財富宣示。",
    castles: ["matsumoto", "matsue", "hikone", "himeji", "kochi"],
  },
  {
    id: "oni-gawara",
    category: "tiles",
    termJP: "鬼瓦",
    termCH: "鬼瓦（鬼面簷端瓦）",
    description:
      "置於大棟端部或瓦壟末端的鬼面裝飾瓦。以猙獰鬼面驅邪辟凶，是所有現存天守共有的普遍裝飾元素。各城的鬼瓦面相各異，反映不同時代與工匠的審美取向。",
    castles: ["himeji", "hikone", "matsumoto", "matsue", "kochi", "hirosaki", "inuyama", "marugame"],
  },
  {
    id: "noshi-gawara",
    category: "tiles",
    termJP: "熨斗瓦",
    termCH: "熨斗瓦（疊脊瓦）",
    description:
      "多層疊置於大棟、隅棟頂部的長形平瓦。層數越多代表建築等級越高；姫路城大棟的熨斗瓦多達九層疊置，象徵天下人的地位。其寬扁的剖面形如熨斗（摺衣工具）而得名。",
    castles: ["himeji", "hikone", "iyo"],
  },
  {
    id: "kazari-gawara",
    category: "tiles",
    termJP: "飾り瓦",
    termCH: "飾瓦（裝飾簷端瓦）",
    description:
      "瓦壟末端的圓形或半圓形裝飾瓦，刻有家紋、巴紋或植物紋様。松本城採用黑漆燒製的「黑瓦」，整體色調統一，強化「烏城」的視覺衝擊；姬路城則採用白漆喰塗抹的白瓦。",
    castles: ["matsumoto", "himeji", "hikone", "matsue"],
  },
  // ── 石垣 ISHIGAKI (Stone Walls) ─────────────────────────────────────────────
  {
    id: "nozura",
    category: "ishigaki",
    termJP: "野面積",
    termCH: "野面積（粗石砌法）",
    description:
      "最古老的石垣砌法——使用未加工的天然原石，依石塊自然形狀堆砌。石間縫隙較大，以碎石填補；排水性佳但抗震性較弱。丸岡城與備中松山城保存了最原始的野面積石垣，可直接觀察戰國時代的土木水準。",
    castles: ["maruoka", "bicchu", "hirosaki"],
  },
  {
    id: "uchikomi",
    category: "ishigaki",
    termJP: "打込ハギ",
    termCH: "打込接（半加工砌法）",
    description:
      "對石塊的接觸面進行局部修整，使接縫更緊密，但石塊外表面仍保留自然形貌。這是戰國末期至江戶初期最普遍的工法，兼顧施工速度與強度。松本城、松江城的主要石垣均為此工法。",
    castles: ["matsumoto", "matsue", "hirosaki", "uwajima"],
  },
  {
    id: "kirikomi",
    category: "ishigaki",
    termJP: "切込ハギ",
    termCH: "切込接（精切砌法）",
    description:
      "對石塊六面全部精確切割，達到面面貼合的效果。接縫極細（不足1cm），整體呈現幾何美感。這是江戶時代石匠技術的最高表現，耗時費工；姫路城、彦根城的石垣是切込ハギ的代表傑作。",
    castles: ["himeji", "hikone", "marugame", "kochi"],
  },
  {
    id: "sangi",
    category: "ishigaki",
    termJP: "算木積",
    termCH: "算木積（算術積角法）",
    description:
      "石垣轉角的專用積法——將長條形截面的大石交替縱橫疊置，形成穩固的隅角。名稱來自其與算盤算珠排列方式相似。幾乎所有江戶時代的石垣轉角都採用此工法，是判斷石垣時代的重要依據。",
    castles: ["himeji", "hikone", "matsumoto", "marugame", "kochi", "iyo"],
  },
  {
    id: "nuno",
    category: "ishigaki",
    termJP: "布積",
    termCH: "布積（水平層積法）",
    description:
      "使用大小較均一的切石，沿水平線整齊排列，每層石縫呈直線狀。視覺效果最為整齊規則，是高知城外郭石垣、丸亀城上段石垣採用的精緻工法。因各層接縫連通，對地震的吸收能力相對較弱。",
    castles: ["kochi", "marugame"],
  },
  // ── 防禦機關 DEFENSE MECHANISMS ──────────────────────────────────────────────
  {
    id: "hazama",
    category: "defense",
    termJP: "狭間",
    termCH: "狹間（射擊孔）",
    description:
      "城壁與土塀上開設的射擊孔，依據使用武器區分：丸狹間（圓形，弓箭用）、三角狹間（三角形，鐵砲用）、四角狹間（矩形，多用途）。姫路城在百間廊下共設狹間675個，涵蓋三種形式，是研究狹間分布策略的最佳範本。",
    castles: ["himeji", "hikone", "matsumoto", "kochi", "marugame", "matsue", "iyo"],
  },
  {
    id: "ishi-otoshi",
    category: "defense",
    termJP: "石落",
    termCH: "石落（落石懸挑）",
    description:
      "從天守或多門櫓壁面突出的木造懸挑結構，底部設格柵開口。守備方可由此投擲石塊、熱水或鐵砲射擊逼近城牆的攻擊者。彦根城的石落保存最為完整，設計精巧，射界涵蓋石垣根部的盲角區域。",
    castles: ["hikone", "himeji", "matsue", "kochi"],
  },
  {
    id: "tamon",
    category: "defense",
    termJP: "多門櫓",
    termCH: "多門櫓（長廊式箭樓）",
    description:
      "沿城牆延伸的細長形多層建築，兼具通道與防禦火力點的功能。守備兵可在其中移動，並透過側面的狹間持續射擊。高知城的多門櫓將本丸完整包圍，形成封閉防禦圈；姫路城的百間廊下是規模最大的多門櫓遺構。",
    castles: ["himeji", "kochi", "hikone", "iyo"],
  },
  {
    id: "masugata",
    category: "defense",
    termJP: "枡形虎口",
    termCH: "枡形虎口（方形甕城入口）",
    description:
      "正方形或矩形的封閉式入口庭院——攻城者強行突破外門後，被迫進入三面高牆的「死角方盒」，在開啟內門前遭受守備方四面夾擊。彦根城的表門枡形虎口與姫路城的菱の門枡形是最著名的實例，體現了江戶城郭防禦設計的智慧頂點。",
    castles: ["himeji", "hikone", "matsumoto", "kochi", "marugame"],
  },
  {
    id: "hori",
    category: "defense",
    termJP: "水堀",
    termCH: "水堀（水護城河）",
    description:
      "環繞城郭的人工水道，兼具物理阻隔與心理威懾功能。彦根城的内堀至今保存完整，水面倒映天守的景觀是城郭美學的代表意象。松本城的水堀亦完好，冬季水面結冰時呈現「氷城」的壯觀景象。丸亀城的石垣高度配合無水堀的設計，以純粹的石垣高度作為替代防禦。",
    castles: ["hikone", "matsumoto", "marugame", "himeji", "matsue"],
  },
];

// ─── Kamon Timelines ──────────────────────────────────────────────────────────

export const kamonTimelines: KamonTimeline[] = [
  {
    castleId: "himeji",
    nameJP: "姫路城",
    nameCH: "姬路城",
    entries: [
      { clan: "赤松氏", clanCH: "赤松氏", period: "1333–1441", kamonKey: "akam" },
      { clan: "浦上氏→別所氏", clanCH: "浦上氏→別所氏", period: "1441–1580", kamonKey: "betcho" },
      { clan: "羽柴（豊臣）秀吉", clanCH: "羽柴（豐臣）秀吉", period: "1580–1600", kamonKey: "toyotomi" },
      { clan: "池田氏", clanCH: "池田氏", period: "1600–1617", kamonKey: "ikeda" },
      { clan: "本多氏", clanCH: "本多氏", period: "1617–1639", kamonKey: "honda" },
      { clan: "松平氏", clanCH: "松平氏", period: "1639–1868", kamonKey: "matsu" },
    ],
  },
  {
    castleId: "hikone",
    nameJP: "彦根城",
    nameCH: "彥根城",
    entries: [
      { clan: "井伊氏", clanCH: "井伊氏", period: "1604–1868（260年）", kamonKey: "ii" },
    ],
  },
  {
    castleId: "inuyama",
    nameJP: "犬山城",
    nameCH: "犬山城",
    entries: [
      { clan: "織田氏（信康）", clanCH: "織田氏（信康）", period: "1537–1600", kamonKey: "oda" },
      { clan: "石川氏", clanCH: "石川氏", period: "1600–1617", kamonKey: "ishi" },
      { clan: "尾張徳川家", clanCH: "尾張德川家", period: "1617–1618", kamonKey: "owari" },
      { clan: "成瀬氏", clanCH: "成瀨氏", period: "1617–1871（254年）", kamonKey: "naruse" },
    ],
  },
  {
    castleId: "matsumoto",
    nameJP: "松本城",
    nameCH: "松本城",
    entries: [
      { clan: "小笠原氏", clanCH: "小笠原氏", period: "1504–1550", kamonKey: "ogasa" },
      { clan: "石川氏", clanCH: "石川氏（天守築城）", period: "1590–1613", kamonKey: "ishi" },
      { clan: "松平氏（諸藩）", clanCH: "松平氏（諸藩）", period: "1613–1700", kamonKey: "matsu" },
      { clan: "戸田氏", clanCH: "戶田氏", period: "1700–1871", kamonKey: "toda" },
    ],
  },
];

// ─── Castle Table rows ────────────────────────────────────────────────────────

export type CastleTableRow = {
  nameJP: string;
  nameCH: string;
  prefecture: string;
  clan: string;
  year: string;
  designation: Designation;
  tiers: number;
};

export const castleTableRows: CastleTableRow[] = castles.map((c) => ({
  nameJP: c.nameJP,
  nameCH: c.nameCH,
  prefecture: c.prefectureCH,
  clan: c.clanCH,
  year: c.year,
  designation: c.designation,
  tiers: c.tiers,
}));

// ─── References ───────────────────────────────────────────────────────────────

export const references: ReferenceItem[] = [
  {
    id: 1,
    title: "弘前城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E5%BC%98%E5%89%8D%E5%9F%8E",
  },
  {
    id: 2,
    title: "松本城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E6%9D%BE%E6%9C%AC%E5%9F%8E",
  },
  {
    id: 3,
    title: "松本城公式サイト",
    source: "松本市公式観光情報サイト",
    url: "https://www.matsumoto-castle.jp/",
  },
  {
    id: 4,
    title: "丸岡城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E4%B8%B8%E5%B2%A1%E5%9F%8E",
  },
  {
    id: 5,
    title: "現存十二天守 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E7%8F%BE%E5%AD%98%E5%8D%81%E4%BA%8C%E5%A4%A9%E5%AE%88",
  },
  {
    id: 6,
    title: "彦根城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E5%BD%A6%E6%A0%B9%E5%9F%8E",
  },
  {
    id: 7,
    title: "彦根城公式サイト",
    source: "公益財団法人 彦根城管理財団",
    url: "https://www.hikonecastle.com/",
  },
  {
    id: 8,
    title: "姫路城 — UNESCO World Heritage",
    source: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/661/",
  },
  {
    id: 9,
    title: "姫路城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E5%A7%AC%E8%B7%AF%E5%9F%8E",
  },
  {
    id: 10,
    title: "松江城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E6%9D%BE%E6%B1%9F%E5%9F%8E",
  },
  {
    id: 11,
    title: "備中松山城 — 維基百科",
    source: "Wikipedia（zh）",
    url: "https://zh.wikipedia.org/wiki/%E5%82%99%E4%B8%AD%E6%9D%BE%E5%B1%B1%E5%9F%8E",
  },
  {
    id: 12,
    title: "高知城・丸亀城 — 日本城郭協会",
    source: "公益財団法人 日本城郭協会",
    url: "https://jokaku.jp/",
  },
];
