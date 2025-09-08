export interface Question {
  id: number;
  category: string;
  dimension: DimensionType;
  weight: number;
  text: Record<LocaleCode, string>;
  reverse: boolean;
  displayOrder?: number; // 显示顺序，用于重新编号
}

export type DimensionType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type LocaleCode = 'zh-CN' | 'en-US' | 'ja-JP';

export interface QuestionSet {
  version: string;
  locale: LocaleCode;
  questions: Question[];
  metadata: {
    totalQuestions: number;
    dimensionCounts: Record<DimensionType, number>;
    categories: string[];
  };
}

// 基于《mbti测试题（新版）.md》的86道题库
export const questions: Question[] = [
  // E / I 维度：能量来源
  // 外向型 (E) – 8题
  { id: 1, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "长时间独处会让我觉得压抑，我需要通过与他人交流来恢复精力。", "en-US": "Being alone for a long time makes me feel depressed; I need to interact with others to recharge.", "ja-JP": "長時間一人でいると憂鬱になり、他人との交流でエネルギーを回復する必要があります。" }, reverse: false },
  { id: 2, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "我遇到有趣的事情时，总是迫不及待地想分享给别人，而不是自己默默消化。", "en-US": "When I encounter interesting things, I always can't wait to share them with others rather than digest them silently by myself.", "ja-JP": "面白いことがあると、一人で黙って消化するのではなく、すぐに他人と共有したくなります。" }, reverse: false },
  { id: 3, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "置身热闹的环境中，我往往比在安静时更有活力。", "en-US": "I often feel more energetic in bustling environments than in quiet ones.", "ja-JP": "にぎやかな環境にいると、静かな時よりもエネルギッシュになることが多いです。" }, reverse: false },
  { id: 4, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "我倾向于通过「说出来」来理清思路，而不是独自思考。", "en-US": "I tend to clarify my thoughts by 'talking them out' rather than thinking alone.", "ja-JP": "一人で考えるのではなく、「声に出して」考えを整理する傾向があります。" }, reverse: false },
  { id: 5, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "我常常在与人交谈时灵感迸发，想到新的点子。", "en-US": "I often get inspired and come up with new ideas when talking with people.", "ja-JP": "人と話している時に、よくインスピレーションが湧き、新しいアイデアを思いつきます。" }, reverse: false },
  { id: 6, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "我喜欢参加聚会或活动，即使活动本身并不重要。", "en-US": "I like attending parties or events, even if the events themselves aren't particularly important.", "ja-JP": "イベント自体がそれほど重要でなくても、パーティーや活動に参加するのが好きです。" }, reverse: false },
  { id: 7, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "在群体中，我很容易开口并主动参与互动。", "en-US": "In groups, I easily speak up and actively participate in interactions.", "ja-JP": "グループの中では、簡単に発言し、積極的に交流に参加します。" }, reverse: false },
  { id: 8, category: "social", dimension: "E", weight: 1.0, text: { "zh-CN": "我更喜欢与人合作完成目标，而不是单打独斗。", "en-US": "I prefer collaborating with others to achieve goals rather than working alone.", "ja-JP": "一人で頑張るよりも、人と協力して目標を達成する方が好きです。" }, reverse: false },

  // 内向型 (I) – 8题
  { id: 9, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "长时间的社交让我感到疲惫，我需要独处才能恢复精力。", "en-US": "Extended socializing makes me feel exhausted; I need alone time to recharge.", "ja-JP": "長時間の社交は疲れを感じさせ、一人の時間でエネルギーを回復する必要があります。" }, reverse: false },
  { id: 10, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "在行动之前，我更愿意先想清楚再说或再做。", "en-US": "Before acting, I prefer to think things through before speaking or doing.", "ja-JP": "行動する前に、話したり行ったりする前によく考えることを好みます。" }, reverse: false },
  { id: 11, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "我常常把一些想法留在心里，而不急着表达出来。", "en-US": "I often keep thoughts to myself rather than rushing to express them.", "ja-JP": "考えを急いで表現するのではなく、心の中に留めておくことがよくあります。" }, reverse: false },
  { id: 12, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "相比于大群体，我更喜欢一对一的深度交流。", "en-US": "I prefer one-on-one deep conversations over large group interactions.", "ja-JP": "大きなグループよりも、一対一の深い交流を好みます。" }, reverse: false },
  { id: 13, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "我的朋友圈不大，但大多关系亲密而持久。", "en-US": "My circle of friends isn't large, but most relationships are close and lasting.", "ja-JP": "友人の輪は大きくありませんが、ほとんどが親密で持続的な関係です。" }, reverse: false },
  { id: 14, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "在公共场合，我通常扮演倾听者，而不是发言者。", "en-US": "In public settings, I usually play the role of listener rather than speaker.", "ja-JP": "公共の場では、通常発言者ではなく聞き手の役割を果たします。" }, reverse: false },
  { id: 15, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "对于重要的话题，我会仔细准备，不会贸然表达。", "en-US": "For important topics, I prepare carefully and don't express myself rashly.", "ja-JP": "重要な話題については、慎重に準備し、軽率に表現することはありません。" }, reverse: false },
  { id: 16, category: "social", dimension: "I", weight: 1.0, text: { "zh-CN": "我更享受安静独处的时光，而不是热闹的氛围。", "en-US": "I enjoy quiet alone time more than bustling atmospheres.", "ja-JP": "にぎやかな雰囲気よりも、静かな一人の時間を楽しみます。" }, reverse: false },

  // S / N 维度：信息获取
  // 感觉型 (S) – 22题
  { id: 17, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我喜欢别人觉得我很理性，因为我通常在日常生活中很少犯错。", "en-US": "I like others to think I'm rational because I usually make few mistakes in daily life.", "ja-JP": "日常生活でほとんどミスをしないので、他人に理性的だと思われるのが好きです。" }, reverse: false },
  { id: 18, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我更信任传统或已被验证的做法，因为它能让我有安全感。", "en-US": "I trust traditional or proven methods more because they give me a sense of security.", "ja-JP": "安心感を与えてくれるので、伝統的または実証済みの方法をより信頼します。" }, reverse: false },
  { id: 19, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "见到一些错误乃至邪恶的事情或言论，我可能会控制不住自己的情绪。", "en-US": "When I see wrong or even evil things or statements, I might not be able to control my emotions.", "ja-JP": "間違ったことや悪いことや発言を見ると、感情をコントロールできなくなることがあります。" }, reverse: false },
  { id: 20, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "只要想一想老板、上司、领导对我的鞭策都是为了我好，我又充满了力量。", "en-US": "Just thinking that my boss, supervisor, or leader's pushing is for my own good fills me with strength.", "ja-JP": "上司や指導者の叱咤激励が自分のためだと思うだけで、力が湧いてきます。" }, reverse: false },
  { id: 21, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "人人都应该自觉遵纪守法，或者说，按照明里暗里的规则和领导的喜好行事，才是正道。", "en-US": "Everyone should consciously obey laws and regulations, or rather, acting according to explicit and implicit rules and leaders' preferences is the right way.", "ja-JP": "誰もが自発的に法規を遵守し、明示的・暗示的なルールや指導者の好みに従って行動することが正道です。" }, reverse: false },
  { id: 22, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我喜欢读科幻小说，因为里面有许多细节描写。", "en-US": "I like reading science fiction novels because they contain many detailed descriptions.", "ja-JP": "SF小説は詳細な描写が多いので読むのが好きです。" }, reverse: false },
  { id: 23, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我更相信权威人物的说法，而不是自己的直觉。", "en-US": "I trust what authority figures say more than my own intuition.", "ja-JP": "自分の直感よりも権威ある人物の言葉を信頼します。" }, reverse: false },
  { id: 24, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我喜欢拍照记录生活，因为这样可以随时回忆。", "en-US": "I like taking photos to record life because I can recall memories anytime.", "ja-JP": "いつでも思い出を振り返ることができるので、写真で生活を記録するのが好きです。" }, reverse: false },
  { id: 25, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我不喜欢的的事物绝大多数都是负面的，因此不需要了解。如果一定要我去了解这些事情，会给我带来多余的烦恼。", "en-US": "Most things I dislike are negative, so there's no need to understand them. If I must understand these things, it would bring me unnecessary troubles.", "ja-JP": "嫌いなもののほとんどはネガティブなので、理解する必要はありません。どうしても理解しなければならない場合、余計な悩みをもたらします。" }, reverse: false },
  { id: 26, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "为了让别人去干一件事情，我会和那个人畅谈自己打算干什么，对他进行引导。当然如果对方是不太亲密的人，为了自己的隐私，我会有选择地讲一些必要信息，而不会全盘托出。", "en-US": "To get someone to do something, I'll talk extensively about what I plan to do to guide them. Of course, if the person isn't very close, I'll selectively share necessary information for privacy, not everything.", "ja-JP": "誰かに何かをしてもらうために、自分が何をするつもりかを詳しく話し、相手を導きます。もちろん、親しくない人の場合は、プライバシーのため必要な情報を選択的に話し、すべてを明かしません。" }, reverse: false },
  { id: 27, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我时常会有强烈的既视感，似乎自己以前来过某些地方、干过一些事情、见过同样的人。", "en-US": "I often have strong feelings of déjà vu, as if I've been to certain places, done certain things, or met the same people before.", "ja-JP": "強いデジャヴ感をよく経験し、以前にある場所に行ったり、あることをしたり、同じ人に会ったりしたことがあるような気がします。" }, reverse: false },
  { id: 28, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我更相信亲眼所见的事实，而不是推测。", "en-US": "I trust facts I see with my own eyes more than speculation.", "ja-JP": "推測よりも自分の目で見た事実を信頼します。" }, reverse: false },
  { id: 29, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我认为我自己很富有想象力和好奇心，喜欢寻觅日常中的快乐，很能留意到现实中的变化。", "en-US": "I think I'm very imaginative and curious, like seeking joy in daily life, and can notice changes in reality well.", "ja-JP": "自分は想像力と好奇心に富んでいて、日常の中で喜びを見つけることが好きで、現実の変化によく気づくと思います。" }, reverse: false },
  { id: 30, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我天生对各种细节很敏感，当我走进一个房间时，我会立刻注意到细节，比如灯光、气味或别人穿的衣服。", "en-US": "I'm naturally sensitive to various details. When I enter a room, I immediately notice details like lighting, smells, or what others are wearing.", "ja-JP": "生まれつきさまざまな細部に敏感で、部屋に入ると照明、匂い、他人の服装などの細部にすぐに気づきます。" }, reverse: false },
  { id: 31, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我渴望各种感官刺激，例如美味的食物，刺激的游戏，好看的画面，美丽的衣服等等。", "en-US": "I crave various sensory stimulations, such as delicious food, exciting games, beautiful visuals, lovely clothes, etc.", "ja-JP": "美味しい食べ物、刺激的なゲーム、美しい映像、素敵な服など、さまざまな感覚的な刺激を求めています。" }, reverse: false },
  { id: 32, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我天生就擅长根据穿着打扮判断一个人社会地位的高低。第一次见面的人是穷屌丝还是有钱人，我一眼便知。", "en-US": "I'm naturally good at judging a person's social status based on their dress and appearance. I can tell at a glance whether someone I meet for the first time is poor or wealthy.", "ja-JP": "服装や身なりから人の社会的地位を判断するのが生まれつき得意です。初対面の人が貧しいか裕福かは一目で分かります。" }, reverse: false },
  { id: 33, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我喜欢去尝试了解一些看起来很有逼格的东西，但实际上我很难理解这些东西，但为了装逼还是会去了解。", "en-US": "I like trying to understand things that look sophisticated, but actually I find them hard to understand, yet I still try to learn about them to appear sophisticated.", "ja-JP": "洗練されて見えるものを理解しようとするのが好きですが、実際にはそれらを理解するのは難しく、それでも洗練されて見えるために学ぼうとします。" }, reverse: false },
  { id: 34, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我的随机应变能力很强，当事情出乎意料时，通常我的身体能够快速反应，而不是陷入长时间的思考。", "en-US": "I have strong adaptability. When things are unexpected, my body can usually react quickly rather than falling into prolonged thinking.", "ja-JP": "臨機応変な能力が高く、予期しないことが起こった時、長時間考え込むのではなく、通常体が素早く反応できます。" }, reverse: false },
  { id: 35, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我更喜欢「立刻行动去试」，在做决定时，我会参考自己当下的感受，而不是花大量时间去计划或想象。", "en-US": "I prefer to 'act and try immediately'. When making decisions, I refer to my current feelings rather than spending lots of time planning or imagining.", "ja-JP": "「すぐに行動して試す」ことを好みます。決断を下すとき、大量の時間を計画や想像に費やすのではなく、その時の感覚を参考にします。" }, reverse: false },
  { id: 36, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我喜欢用身体去探索世界，比如旅行时一定要亲身尝试当地食物或活动。", "en-US": "I like exploring the world with my body, such as definitely trying local food or activities when traveling.", "ja-JP": "体で世界を探索するのが好きで、例えば旅行時は必ず現地の食べ物や活動を実際に体験します。" }, reverse: false },
  { id: 37, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我更喜欢「现场体验」而不是「听别人描述」或「自己想象」。", "en-US": "I prefer 'hands-on experience' rather than 'hearing others describe' or 'imagining myself'.", "ja-JP": "「他人の説明を聞く」や「自分で想像する」よりも「現場体験」を好みます。" }, reverse: false },
  { id: 38, category: "information", dimension: "S", weight: 1.0, text: { "zh-CN": "我基本上算是个喜欢运动和开车的人，当我运动或开车时，我能自然地捕捉周围细节，并根据情况迅速调整。这类情况并不会使我感觉累，反而可以提振精神。", "en-US": "I'm basically someone who likes sports and driving. When I exercise or drive, I can naturally capture surrounding details and quickly adjust according to situations. These situations don't make me feel tired; instead, they boost my spirits.", "ja-JP": "基本的にスポーツや運転が好きな人間です。運動や運転をしているとき、周囲の細部を自然に捉え、状況に応じて素早く調整できます。このような状況は疲れを感じさせず、むしろ精神を高揚させます。" }, reverse: false },

  // 直觉型 (N) – 16题
  { id: 39, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我喜欢探索未来的可能性，而不是停留在眼前。", "en-US": "I like exploring future possibilities rather than staying focused on the present.", "ja-JP": "目の前のことに留まるのではなく、未来の可能性を探求するのが好きです。" }, reverse: false },
  { id: 40, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我常常联想不同事物之间的联系，哪怕它们看似无关。", "en-US": "I often associate connections between different things, even if they seem unrelated.", "ja-JP": "関連がないように見えても、異なる物事の間のつながりをよく連想します。" }, reverse: false },
  { id: 41, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我总是喜欢「跳出框架」思考问题，因此和我有共同语言的人不多，这是导致我朋友很少的主要原因。", "en-US": "I always like to 'think outside the box', so there aren't many people who share my language, which is the main reason I have few friends.", "ja-JP": "いつも「枠にとらわれない」思考を好むため、共通の言語を持つ人が少なく、これが友人が少ない主な理由です。" }, reverse: false },
  { id: 42, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我有时候无需任何思考，只一眼就能得出事情的结论，但我自己在这一刻既说不出理由也拿不出证据，只是如此相信罢了。之后为了使自己确信，我会大量搜集信息。", "en-US": "Sometimes I can reach conclusions about things at a glance without any thinking, but at that moment I can neither give reasons nor provide evidence, I just believe it. Afterwards, to convince myself, I collect lots of information.", "ja-JP": "時々、何も考えずに一目で物事の結論に達することができますが、その瞬間は理由も証拠も示すことができず、ただそう信じているだけです。その後、自分を納得させるために大量の情報を収集します。" }, reverse: false },
  { id: 43, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我对象征和隐喻比对实际细节更感兴趣。", "en-US": "I'm more interested in symbols and metaphors than actual details.", "ja-JP": "実際の細部よりも象徴や隠喩により興味があります。" }, reverse: false },
  { id: 44, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我愿意为了弄清楚问题的本质而付出很多努力，为了获得真理，我可以轻易\"杀死\"过去的自己。", "en-US": "I'm willing to make great efforts to understand the essence of problems. To obtain truth, I can easily 'kill' my past self.", "ja-JP": "問題の本質を理解するために多大な努力を惜しまず、真理を得るために過去の自分を簡単に「殺す」ことができます。" }, reverse: false },
  { id: 45, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我对他人积累的知识和经验不太感兴趣，但是我对自然规律很感兴趣。", "en-US": "I'm not very interested in knowledge and experience accumulated by others, but I'm very interested in natural laws.", "ja-JP": "他人が蓄積した知識や経験にはあまり興味がありませんが、自然法則には非常に興味があります。" }, reverse: false },
  { id: 46, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "由于我总是着眼于事物发展的长期影响，导致错过了许多眼前的事物。", "en-US": "Because I always focus on the long-term effects of things' development, I miss many things right in front of me.", "ja-JP": "物事の発展の長期的な影響に常に注目しているため、目の前の多くのことを見逃してしまいます。" }, reverse: false },
  { id: 47, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "当我遇到一个复杂的问题时，我常常在脑海中浮现出一个整体性的\"答案图像\"，而不是逐步分析。", "en-US": "When I encounter a complex problem, I often have a holistic 'answer image' appear in my mind rather than analyzing step by step.", "ja-JP": "複雑な問題に遭遇した時、段階的に分析するのではなく、頭の中に全体的な「答えのイメージ」がよく浮かびます。" }, reverse: false },
  { id: 48, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我经常会有一种强烈的感觉，能预见某个趋势或结局，即使我无法解释理由。", "en-US": "I often have strong feelings that can foresee certain trends or outcomes, even when I can't explain the reasons.", "ja-JP": "理由を説明できなくても、ある傾向や結果を予見できる強い感覚をよく持ちます。" }, reverse: false },
  { id: 49, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "相比于搜集各种外部资料，我更依赖自己内心的直觉去把握未来方向。", "en-US": "Compared to collecting various external materials, I rely more on my inner intuition to grasp future directions.", "ja-JP": "さまざまな外部資料を収集するよりも、内なる直感に頼って未来の方向性を把握します。" }, reverse: false },
  { id: 50, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我更喜欢深入挖掘一个核心想法，而不是同时展开很多不同的可能性。", "en-US": "I prefer to dig deep into one core idea rather than exploring many different possibilities at once.", "ja-JP": "多くの異なる可能性を同時に展開するよりも、一つの核心的なアイデアを深く掘り下げることを好みます。" }, reverse: false },
  { id: 51, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "当别人讲述一个故事或现象时，我会下意识去寻找它背后隐藏的意义或主题。", "en-US": "When others tell a story or describe a phenomenon, I subconsciously look for the hidden meaning or theme behind it.", "ja-JP": "他人が物語や現象を語る時、その背後に隠された意味やテーマを無意識に探します。" }, reverse: false },
  { id: 52, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "别人常说我不够体贴，而我自己却觉得是在坚持正确的想法。", "en-US": "Others often say I'm not considerate enough, but I feel I'm sticking to correct ideas.", "ja-JP": "他人からよく思いやりが足りないと言われますが、自分では正しい考えを貫いていると感じています。" }, reverse: false },
  { id: 53, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我平时基本上是个不怎么运动的人，但有时候会基于一些莫名其妙的理由在短时间内爆发出巨大的动力，导致身心疲惫不堪。这种感觉很难受，但我已经习惯了。", "en-US": "I'm basically not much of an exerciser normally, but sometimes I burst out with huge motivation for inexplicable reasons in a short time, leading to physical and mental exhaustion. This feeling is uncomfortable, but I'm used to it.", "ja-JP": "普段は基本的にあまり運動をしない人間ですが、時々わけのわからない理由で短時間に巨大な動力を爆発させ、心身ともに疲れ果ててしまいます。この感覚は辛いですが、もう慣れました。" }, reverse: false },
  { id: 54, category: "information", dimension: "N", weight: 1.0, text: { "zh-CN": "我善于将事物意象化，记忆宫殿是我的拿手好戏。", "en-US": "I'm good at visualizing things; memory palace is my specialty.", "ja-JP": "物事をイメージ化するのが得意で、記憶の宮殿は私の得意技です。" }, reverse: false },

  // T / F 维度：决策方式
  // 思考型 (T) – 8题
  { id: 55, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我认为「正确」远比「合群」更重要。", "en-US": "I believe 'being right' is far more important than 'fitting in'.", "ja-JP": "「正しい」ことは「群れに合わせる」ことよりもはるかに重要だと考えています。" }, reverse: false },
  { id: 56, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "在争论时，我更看重论据是否合理，而不是对方感受。", "en-US": "In arguments, I focus more on whether the reasoning is sound rather than the other person's feelings.", "ja-JP": "議論の際、相手の感情よりも論拠が合理的かどうかを重視します。" }, reverse: false },
  { id: 57, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我觉得效率和结果比和谐氛围更重要。", "en-US": "I think efficiency and results are more important than harmonious atmosphere.", "ja-JP": "効率と結果は調和のとれた雰囲気よりも重要だと思います。" }, reverse: false },
  { id: 58, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我在分析问题时，更依赖自己的思维习惯和逻辑方法，而不是仅凭「天生聪明」。实际上智商比我高的人很多，只论智商的话，我并不是顶级。", "en-US": "When analyzing problems, I rely more on my thinking habits and logical methods rather than just 'natural intelligence'. Actually, many people have higher IQ than me; in terms of IQ alone, I'm not top-tier.", "ja-JP": "問題を分析する時、「生まれつきの頭の良さ」だけに頼るのではなく、自分の思考習慣と論理的方法により依存します。実際、私よりIQの高い人はたくさんいて、IQだけで言えば私はトップレベルではありません。" }, reverse: false },
  { id: 59, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我会花很多时间打磨一个理论框架，确保它逻辑上完全自洽，即使别人觉得没那么实用。", "en-US": "I spend a lot of time refining a theoretical framework to ensure it's logically consistent, even if others think it's not that practical.", "ja-JP": "理論的枠組みを磨き上げて論理的に完全に一貫していることを確保するために多くの時間を費やします。他人がそれほど実用的でないと思っても。" }, reverse: false },
  { id: 60, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我做事情时，我更看重是否能达成目标，而不是过程是否符合某种理论。", "en-US": "When doing things, I focus more on whether the goal can be achieved rather than whether the process conforms to some theory.", "ja-JP": "物事をする時、プロセスがある理論に合致するかよりも、目標を達成できるかどうかを重視します。" }, reverse: false },
  { id: 61, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我在讨论时，如果别人不同意我的观点，我会要求他们给出逻辑依据。", "en-US": "In discussions, if others disagree with my views, I require them to provide logical basis.", "ja-JP": "議論の際、他人が私の見解に同意しない場合、論理的根拠を提示するよう求めます。" }, reverse: false },
  { id: 62, category: "decision", dimension: "T", weight: 1.0, text: { "zh-CN": "我常常思考如何把重复性的工作简化或自动化，以提升效率。", "en-US": "I often think about how to simplify or automate repetitive work to improve efficiency.", "ja-JP": "効率を向上させるために、反復的な作業をどのように簡素化または自動化するかをよく考えます。" }, reverse: false },

  // 情感型 (F) – 8题
  { id: 63, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "我更在意人际关系是否和谐，而不是结果是否高效。", "en-US": "I care more about whether interpersonal relationships are harmonious rather than whether results are efficient.", "ja-JP": "結果が効率的かどうかよりも、人間関係が調和しているかどうかを気にします。" }, reverse: false },
  { id: 64, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "我很容易被别人的情绪所感染。", "en-US": "I'm easily influenced by others' emotions.", "ja-JP": "他人の感情に簡単に感染されます。" }, reverse: false },
  { id: 65, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "我很容易就能感知到周围人的情绪变化。", "en-US": "I can easily perceive emotional changes in people around me.", "ja-JP": "周囲の人の感情の変化を簡単に感知できます。" }, reverse: false },
  { id: 66, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "当我心理受挫时，我更倾向寻求与信任的人分享情感，以缓解内心的不适，而不仅仅是寻求解决方案。", "en-US": "When I'm psychologically frustrated, I tend to seek emotional sharing with trusted people to ease inner discomfort, not just seeking solutions.", "ja-JP": "心理的に挫折した時、解決策を求めるだけでなく、信頼できる人と感情を共有して内なる不快感を和らげることを好みます。" }, reverse: false },
  { id: 67, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "当我做决定时，我会优先考虑内心的价值观或道德标准。", "en-US": "When making decisions, I prioritize inner values or moral standards.", "ja-JP": "決断を下す時、内なる価値観や道徳的基準を優先します。" }, reverse: false },
  { id: 68, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "当看到有人陷入困境或不开心时，我会先关注他们的感受，并尝试理解他们的内心想法，而不是立刻给出逻辑分析或解决方案。", "en-US": "When I see someone in trouble or unhappy, I first focus on their feelings and try to understand their inner thoughts, rather than immediately giving logical analysis or solutions.", "ja-JP": "誰かが困っていたり不幸だったりするのを見た時、すぐに論理的分析や解決策を提示するのではなく、まずその人の感情に注目し、内なる考えを理解しようとします。" }, reverse: false },
  { id: 69, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "我喜欢创造一种让周围人感到安全和被尊重的环境，即使这需要牺牲自己的一些便利。", "en-US": "I like creating an environment where people around me feel safe and respected, even if it requires sacrificing some of my own convenience.", "ja-JP": "自分の便利さを犠牲にする必要があっても、周囲の人が安全で尊重されていると感じる環境を作ることが好きです。" }, reverse: false },
  { id: 70, category: "decision", dimension: "F", weight: 1.0, text: { "zh-CN": "我内心倾向认为道德和智识之间存在一定联系，如果一个人的社会道德感不高，不管他多有远见、多有智慧，我都会觉得难以接纳他。", "en-US": "I tend to believe there's a connection between morality and intellect. If someone has low social moral sense, no matter how visionary or wise they are, I find it hard to accept them.", "ja-JP": "道徳と知性の間には一定の関係があると内心で考える傾向があり、社会的道徳感の低い人は、どんなに先見性があり賢明であっても、受け入れることが困難だと感じます。" }, reverse: false },

  // J / P 维度：生活方式
  // 判断型 (J) – 8题
  { id: 71, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "我喜欢提前规划每一步，并确保自己在最短时间内达到目标，即使这意味着别人可能落后。", "en-US": "I like planning every step in advance and ensuring I reach goals in the shortest time, even if it means others might fall behind.", "ja-JP": "事前にすべてのステップを計画し、他の人が遅れるかもしれなくても、最短時間で目標に到達することを確実にするのが好きです。" }, reverse: false },
  { id: 72, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "我在团队或比赛中，总是希望自己能胜出，即便这会让团队其他人付出更多努力。", "en-US": "In teams or competitions, I always hope to win, even if it means other team members have to make more effort.", "ja-JP": "チームや競技では、チームの他のメンバーがより多くの努力をしなければならないとしても、常に自分が勝つことを望みます。" }, reverse: false },
  { id: 73, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "我倾向设定明确的胜负标准，并通过计划和努力确保自己占据优势。", "en-US": "I tend to set clear winning standards and ensure I have the advantage through planning and effort.", "ja-JP": "明確な勝敗基準を設定し、計画と努力を通じて自分が優位に立つことを確実にする傾向があります。" }, reverse: false },
  { id: 74, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "我不喜欢拖延或犹豫，总觉得机会是留给有准备并行动果断的人。", "en-US": "I don't like procrastination or hesitation; I always feel opportunities are for those who are prepared and act decisively.", "ja-JP": "先延ばしや躊躇は好きではなく、機会は準備ができていて断固として行動する人のためにあると常に感じています。" }, reverse: false },
  { id: 75, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "在做决策时，我更关注实现目标和效率，而不是考虑别人是否能从中获益。", "en-US": "When making decisions, I focus more on achieving goals and efficiency rather than considering whether others can benefit.", "ja-JP": "決断を下す時、他人が利益を得られるかどうかを考慮するよりも、目標の達成と効率により注目します。" }, reverse: false },
  { id: 76, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "在压力下，我会更加专注于完成任务。", "en-US": "Under pressure, I become more focused on completing tasks.", "ja-JP": "プレッシャーの下では、タスクの完了により集中します。" }, reverse: false },
  { id: 77, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "在资源有限的情况下，我更关注自己能否获得最大回报，而不是如何平分给所有人。", "en-US": "When resources are limited, I focus more on whether I can get maximum returns rather than how to distribute equally to everyone.", "ja-JP": "リソースが限られている状況では、すべての人に平等に分配する方法よりも、自分が最大のリターンを得られるかどうかにより注目します。" }, reverse: false },
  { id: 78, category: "lifestyle", dimension: "J", weight: 1.0, text: { "zh-CN": "假设我是领导，为了让团队达到高绩效，我会不断施加压力和严格要求，即便我不确定哪种方法最合适，即便这些措施让部下们感到不适，只要能获得一点成果，我都会尝试。", "en-US": "Assuming I'm a leader, to make the team achieve high performance, I would continuously apply pressure and strict requirements, even if I'm not sure which method is most suitable, even if these measures make subordinates uncomfortable, as long as some results can be achieved, I would try.", "ja-JP": "もし私がリーダーだとしたら、チームに高いパフォーマンスを達成させるために、どの方法が最も適切かわからなくても、これらの措置が部下を不快にさせても、少しでも成果が得られる限り、継続的に圧力をかけ厳しい要求をするでしょう。" }, reverse: false },

  // 知觉型 (P) – 8题
  { id: 79, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "我更喜欢灵活自由的生活方式。", "en-US": "I prefer a flexible and free lifestyle.", "ja-JP": "柔軟で自由なライフスタイルを好みます。" }, reverse: false },
  { id: 80, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "在团队合作中，我会尽量兼顾每个人的意见，确保大家都能获得满足感和成就感。", "en-US": "In team cooperation, I try to consider everyone's opinions and ensure everyone can gain satisfaction and achievement.", "ja-JP": "チーム協力では、すべての人の意見を考慮し、誰もが満足感と達成感を得られるよう努めます。" }, reverse: false },
  { id: 81, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "其实顺应每个人的人性，无为而治，才能实现效率最大化。", "en-US": "Actually, following everyone's human nature and governing without interference can maximize efficiency.", "ja-JP": "実際には、すべての人の人間性に従い、無為而治することで効率を最大化できます。" }, reverse: false },
  { id: 82, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "我希望保持选择的开放性，灵活机动，而不是一开始就坚持一个决定。", "en-US": "I hope to keep options open and be flexible rather than sticking to one decision from the start.", "ja-JP": "最初から一つの決定に固執するのではなく、選択肢を開いておき、柔軟性を保ちたいと思います。" }, reverse: false },
  { id: 83, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "在轻松环境下，我能更好地发挥。", "en-US": "I can perform better in a relaxed environment.", "ja-JP": "リラックスした環境でより良いパフォーマンスを発揮できます。" }, reverse: false },
  { id: 84, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "我认为成功不仅属于自己，也属于能够一起努力、共享成果的人。", "en-US": "I believe success belongs not only to myself but also to those who can work together and share the results.", "ja-JP": "成功は自分だけのものではなく、一緒に努力し、成果を共有できる人々のものでもあると考えています。" }, reverse: false },
  { id: 85, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "如果可以选择，我更喜欢自己热爱的事业，而不是为了KPI奔波劳碌。", "en-US": "Given a choice, I prefer pursuing careers I'm passionate about rather than running around for KPIs.", "ja-JP": "選択できるなら、KPIのために奔走するよりも、自分が情熱を持てる事業を好みます。" }, reverse: false },
  { id: 86, category: "lifestyle", dimension: "P", weight: 1.0, text: { "zh-CN": "我认为\"公平\"意味着每个人适才适所，而不是一刀切。", "en-US": "I believe 'fairness' means putting everyone in suitable positions rather than one-size-fits-all.", "ja-JP": "「公平」とは、画一的な扱いではなく、すべての人が適材適所にいることを意味すると考えています。" }, reverse: false },
];

export const questionSet: QuestionSet = {
  version: "2.0.0",
  locale: "zh-CN",
  questions,
  metadata: {
    totalQuestions: 86,
    dimensionCounts: {
      E: 8, I: 8, S: 22, N: 16, T: 8, F: 8, J: 8, P: 8
    },
    categories: ["social", "information", "decision", "lifestyle"]
  }
};