(function () {
    'use strict';

    var entries = [
        ['انتصارات أكتوبر', 'October Victories', 'ניצחונות אוקטובר'],
        ['انتصارات أكتوبر © SOFTWEB', 'October Victories © SOFTWEB', 'ניצחונות אוקטובר © SOFTWEB'],
        ['قادة نصر أكتوبر | SOFTWEB', 'October Victory Leaders | SOFTWEB', 'מנהיגי ניצחון אוקטובר | SOFTWEB'],
        ['قادة الجبهة السورية | SOFTWEB', 'Syrian Front Leaders | SOFTWEB', 'מנהיגי החזית הסורית | SOFTWEB'],
        ['القيادات الإسرائيلية | SOFTWEB', 'Israeli Leaders | SOFTWEB', 'מנהיגי ישראל | SOFTWEB'],
        ['تعرف على أبرز القادة السوريين خلال حرب أكتوبر ١٩٧٣.', 'Meet the leading Syrian figures during the 1973 October War.', 'הכירו את המנהיגים הסורים הבולטים במלחמת אוקטובר 1973.'],
        ['تعرف على أبرز القيادات الإسرائيلية خلال حرب أكتوبر ١٩٧٣.', 'Meet the leading Israeli figures during the 1973 October War.', 'הכירו את המנהיגים הישראלים הבולטים במלחמת אוקטובר 1973.'],
        ['الرئيسية', 'Home', 'ראשי'],
        ['تعرف على القادة', 'Meet the Leaders', 'הכירו את המנהיגים'],
        ['مقدمة', 'Introduction', 'מבוא'],
        ['الأسباب', 'Causes', 'הסיבות'],
        ['القادة', 'Leaders', 'מנהיגים'],
        ['الخطط', 'Plans', 'תוכניות'],
        ['الجدول الزمني', 'Timeline', 'ציר הזמן'],
        ['المعارك', 'Battles', 'קרבות'],
        ['الأسلحة', 'Weapons', 'נשק'],
        ['النتائج', 'Results', 'תוצאות'],
        ['المعرض', 'Gallery', 'גלריה'],
        ['اختبر نفسك', 'Quiz', 'בחן את עצמך'],
        ['من نحن', 'About Us', 'אודות'],
        ['ملحمة أكتوبر', 'The October Epic', 'אפוס אוקטובר'],
        ['المجيدة', 'Glorious', 'המפואר'],
        ['السادس من أكتوبر ١٩٧٣', 'October 6, 1973', '6 באוקטובר 1973'],
        ['١', '1', '1'],
        ['٢', '2', '2'],
        ['٣', '3', '3'],
        ['٦ أكتوبر ١٩٧٣', 'October 6, 1973', '6 באוקטובר 1973'],
        ['ابدأ الرحلة', 'Begin the Journey', 'התחילו במסע'],
        ['تعرف علي القيادة المصرية', 'Meet the Egyptian leadership', 'הכירו את ההנהגה המצרית'],
        ['تعرف علي القيادة السورية', 'Meet the Syrian leadership', 'הכירו את ההנהגה הסורית'],
        ['تعرف علي القيادة الاسرائيلية', 'Meet the Israeli leadership', 'הכירו את ההנהגה הישראלית'],
        ['دخول الان', 'Explore', 'כניסה'],
        ['في السادس من أكتوبر ١٩٧٣، شنت القوات المسلحة المصرية والسورية هجوما مفاجئا على القوات الإسرائيلية في سيناء والجولان، واستعادت القوات المصرية جزءا من سيناء، وحققت القوات السورية بعض الانتصارات في الجولان. كانت حرب أكتوبر انتصارا عسكريا وسياسيا للعرب، وأدت إلى استعادة الأرض المحتلة وإبرام معاهدة السلام بين مصر وإسرائيل .', 'On October 6, 1973, Egyptian and Syrian armed forces launched a surprise attack on Israeli forces in Sinai and the Golan Heights. Egyptian forces reclaimed part of Sinai, while Syrian forces achieved several gains in the Golan Heights. The October War was a military and political victory for the Arab world, paving the way for the recovery of occupied land and a peace treaty between Egypt and Israel.', 'ב-6 באוקטובר 1973 פתחו הכוחות המזוינים של מצרים וסוריה במתקפת פתע נגד הכוחות הישראליים בסיני וברמת הגולן. הכוחות המצריים השיבו לעצמם חלק מסיני, והכוחות הסוריים רשמו הישגים ברמת הגולן. מלחמת אוקטובר הייתה ניצחון צבאי ופוליטי לערבים, וסללה את הדרך להשבת שטחים ולהסכם שלום בין מצרים לישראל.'],
        ['لماذا قامت الحرب؟', 'Why Did the War Begin?', 'מדוע פרצה המלחמה?'],
        ['هزيمة ١٩٦٧', 'The 1967 Defeat', 'תבוסת 1967'],
        ['احتلت إسرائيل سيناء والجولان والضفة الغربية وقطاع غزة، وأصبحت قناة السويس خط المواجهة.', 'Israel occupied Sinai, the Golan Heights, the West Bank, and the Gaza Strip, while the Suez Canal became the front line.', 'ישראל כבשה את סיני, רמת הגולן, הגדה המערבית ורצועת עזה, ותעלת סואץ הפכה לקו החזית.'],
        ['حرب الاستنزاف', 'The War of Attrition', 'מלחמת ההתשה'],
        ['من ١٩٦٧ إلى ١٩٧٠ استمرت المعارك على ضفتي القناة، وأعادت للجيش ثقته بنفسه.', 'From 1967 to 1970, fighting continued on both sides of the canal, helping restore the army’s confidence.', 'מ-1967 עד 1970 נמשכו הקרבות משני צדי התעלה, וחיזקו מחדש את ביטחון הצבא.'],
        ['انسداد الحلول السياسية', 'Political Stalemate', 'מבוי סתום מדיני'],
        ['ظلت الأرض محتلة رغم المحاولات السياسية، فتأكدت القيادة أن استعادتها تحتاج إلى القوة.', 'The land remained occupied despite political efforts, convincing the leadership that it would take force to reclaim it.', 'השטחים נותרו כבושים למרות המאמצים המדיניים, וההנהגה הגיעה למסקנה שהשבתם מחייבת שימוש בכוח.'],
        ['إعادة بناء الجيش', 'Rebuilding the Army', 'בניית הצבא מחדש'],
        ['ست سنوات من التدريب المكثف والتسليح الجديد ووضع الخطط الدقيقة.', 'Six years of intensive training, new weapons, and careful planning.', 'שש שנים של אימונים אינטנסיביים, חימוש חדש ותכנון מדויק.'],
        ['قادة النصر', 'Leaders of Victory', 'מנהיגי הניצחון'],
        ['قادة نصر أكتوبر', 'October Victory Leaders', 'מנהיגי ניצחון אוקטובר'],
        ['أنور السادات', 'Anwar Sadat', 'אנואר סאדאת'],
        ['صاحب قرار الحرب', 'The leader who made the decision to go to war', 'המנהיג שקיבל את ההחלטה לצאת למלחמה'],
        ['أحمد إسماعيل علي', 'Ahmed Ismail Ali', 'אחמד איסמעיל עלי'],
        ['وزير الحربية والقائد العام', 'Minister of War and Commander-in-Chief', 'שר המלחמה והמפקד העליון'],
        ['سعد الدين الشاذلي', 'Saad El Shazly', 'סעד א-שאזלי'],
        ['رئيس أركان حرب القوات المسلحة', 'Chief of Staff of the Armed Forces', 'ראש המטה הכללי של הכוחות המזוינים'],
        ['الخطط العسكرية', 'Military Plans', 'תוכניות צבאיות'],
        ['العملية بدر', 'Operation Badr', 'מבצע בדר'],
        ['خطة العبور واقتحام خط بارليف', 'The crossing plan and the breach of the Bar-Lev Line', 'תוכנית הצליחה והפריצה של קו בר-לב'],
        ['الخطة الأساسية لعبور قناة السويس. بدأت بضربة جوية ثم عبور المشاة بالقوارب المطاطية، وبعدها أقيمت الكباري لعبور الدبابات والمعدات وتثبيت رؤوس كباري شرق القناة.', 'The main plan for crossing the Suez Canal began with an air strike, followed by infantry crossing in rubber boats. Bridges were then built to move tanks and equipment and secure bridgeheads east of the canal.', 'התוכנית המרכזית לצליחת תעלת סואץ החלה בתקיפה אווירית ולאחריה חצו כוחות רגלים בסירות גומי. בהמשך הוקמו גשרים להעברת טנקים וציוד ולביסוס ראשי גשר ממזרח לתעלה.'],
        ['الخداع الاستراتيجي', 'Strategic Deception', 'הטעיה אסטרטגית'],
        ['إخفاء موعد الحرب عن العدو', 'Concealing the date of the war from the enemy', 'הסתרת מועד המלחמה מהאויב'],
        ['إجراءات لإخفاء موعد الحرب: مناورات متكررة اعتاد عليها العدو، وإظهار الاستعدادات بشكل عادي، واختيار توقيت غير متوقع هو ٦ أكتوبر، وكان في رمضان وفي عيد الغفران عند اليهود.', 'Measures concealed the date of the war: repeated exercises familiar to the enemy, disguising preparations as routine, and choosing the unexpected date of October 6, during Ramadan and the Jewish Day of Atonement.', 'צעדים שנועדו להסתיר את מועד המלחמה: תרגילים חוזרים שהאויב התרגל אליהם, הצגת ההכנות כשגרה ובחירת מועד בלתי צפוי — 6 באוקטובר, במהלך הרמדאן ויום הכיפורים.'],
        ['حائط الصواريخ', 'The Missile Wall', 'מערך הטילים'],
        ['حماية القوات من الطيران', 'Protecting forces from air attacks', 'הגנה על הכוחות מפני תקיפות אוויריות'],
        ['شبكة من صواريخ الدفاع الجوي أقيمت غرب القناة لحماية القوات العابرة من الضربات الجوية، إلى جانب الصواريخ المضادة للدبابات مع المشاة.', 'An air-defense missile network was established west of the canal to protect crossing forces from air strikes, alongside anti-tank missiles carried by infantry.', 'רשת טילי נ״מ הוקמה ממערב לתעלה כדי להגן על הכוחות החוצים מפני תקיפות אוויריות, ולצדה נשאו חיילי הרגלים טילים נגד טנקים.'],
        ['الجدول الزمني', 'Timeline', 'ציר הזמן'],
        ['٦ أكتوبر ١٩٧٣ - الساعة ٢:٠٥ ظهرا', 'October 6, 1973 — 2:05 p.m.', '6 באוקטובר 1973 — 14:05'],
        ['ساعة الصفر', 'Zero Hour', 'שעת השי״ן'],
        ['ضربة جوية مصرية ثم بدء عبور القناة، وفي الوقت نفسه بدأ الهجوم السوري في الجولان.', 'An Egyptian air strike was followed by the canal crossing, while the Syrian attack began in the Golan Heights.', 'תקיפה אווירית מצרית ולאחריה החלה חציית התעלה, ובמקביל החל המתקפה הסורית ברמת הגולן.'],
        ['الأيام الأولى', 'The First Days', 'הימים הראשונים'],
        ['تحطيم خط بارليف', 'Breaking the Bar-Lev Line', 'פריצת קו בר-לב'],
        ['اقتحام الساتر الترابي بمضخات المياه وتدمير النقاط القوية وإقامة رؤوس كباري شرق القناة.', 'Water pumps breached the sand embankment, strongpoints were destroyed, and bridgeheads were established east of the canal.', 'משאבות מים פרצו את סוללת העפר, המעוזים הושמדו וראשי גשר הוקמו ממזרח לתעלה.'],
        ['١٤ أكتوبر', 'October 14', '14 באוקטובר'],
        ['المنصورة والدبابات', 'Mansoura and the Tank Battles', 'מנסורה וקרבות השריון'],
        ['معركة المنصورة الجوية في الدلتا، ومعركة الدبابات الكبرى في سيناء.', 'The aerial Battle of Mansoura in the Delta and the major tank battle in Sinai.', 'הקרב האווירי במנסורה שבדלתא וקרב השריון הגדול בסיני.'],
        ['١٦ أكتوبر', 'October 16', '16 באוקטובר'],
        ['الثغرة', 'The Deversoir Crossing', 'הצליחה באזור דוורסואר'],
        ['عبور قوة إسرائيلية إلى غرب القناة في منطقة الدفرسوار.', 'An Israeli force crossed to the west bank of the canal near Deversoir.', 'כוח ישראלי חצה לגדה המערבית של התעלה באזור דוורסואר.'],
        ['١٧ أكتوبر', 'October 17', '17 באוקטובר'],
        ['سلاح البترول', 'The Oil Weapon', 'נשק הנפט'],
        ['إعلان الدول العربية خفض إنتاج النفط وحظره عن الدول الداعمة لإسرائيل.', 'Arab states announced oil production cuts and an embargo on countries supporting Israel.', 'מדינות ערב הודיעו על צמצום תפוקת הנפט ועל אמברגו נגד מדינות התומכות בישראל.'],
        ['٢٢ أكتوبر', 'October 22', '22 באוקטובר'],
        ['قرار ٣٣٨', 'Resolution 338', 'החלטה 338'],
        ['مجلس الأمن يصدر قرارا بوقف إطلاق النار.', 'The UN Security Council issued a ceasefire resolution.', 'מועצת הביטחון של האו״ם פרסמה החלטה להפסקת אש.'],
        ['٢٥ أكتوبر', 'October 25', '25 באוקטובר'],
        ['استقرار وقف إطلاق النار', 'Ceasefire Takes Hold', 'הפסקת האש מתייצבת'],
        ['وقف إطلاق النار', 'Ceasefire', 'הפסקת אש'],
        ['توقف القتال على الجبهة المصرية بعد قرار جديد من مجلس الأمن.', 'Fighting on the Egyptian front stopped following a new Security Council resolution.', 'הלחימה בחזית המצרית נעצרה בעקבות החלטה חדשה של מועצת הביטחון.'],
        ['أبرز المعارك', 'Key Battles', 'הקרבות המרכזיים'],
        ['٦ أكتوبر', 'October 6', '6 באוקטובר'],
        ['العبور وتحطيم خط بارليف', 'The Crossing and Breach of the Bar-Lev Line', 'הצליחה ופריצת קו בר-לב'],
        ['عبرت القوات القناة بالقوارب المطاطية، وفتح المهندسون ثغرات في الساتر الترابي بمضخات المياه، ثم أقاموا الكباري لعبور المعدات.', 'Troops crossed the canal in rubber boats. Engineers used water pumps to breach the sand embankment, then built bridges for equipment.', 'הכוחות חצו את התעלה בסירות גומי. מהנדסים פרצו את סוללת העפר באמצעות משאבות מים, ולאחר מכן הקימו גשרים להעברת ציוד.'],
        ['الجبهة السورية', 'The Syrian Front', 'החזית הסורית'],
        ['هاجمت القوات السورية في الجولان، واستعادت في اليوم الأول موقع جبل الشيخ.', 'Syrian forces attacked in the Golan Heights and recaptured Mount Hermon on the first day.', 'הכוחות הסוריים תקפו ברמת הגולן וכבשו מחדש את החרמון ביום הראשון.'],
        ['معركة المنصورة الجوية', 'The Aerial Battle of Mansoura', 'הקרב האווירי במנסורה'],
        ['اشتبك الطيران المصري مع الطيران الإسرائيلي في سماء الدلتا، ويحتفل سلاح الطيران بهذا اليوم كل عام.', 'Egyptian and Israeli aircraft clashed over the Delta. The Egyptian Air Force commemorates the day every year.', 'מטוסים מצריים וישראליים התעמתו מעל הדלתא. חיל האוויר המצרי מציין את היום מדי שנה.'],
        ['معركة الدبابات في سيناء', 'The Tank Battle in Sinai', 'קרב השריון בסיני'],
        ['من أكبر معارك الدبابات في التاريخ الحديث، وغيّرت مسار العمليات على الجبهة.', 'One of the largest tank battles in modern history, it changed the course of operations on the front.', 'אחד מקרבות השריון הגדולים בהיסטוריה המודרנית, ששינה את מהלך הפעולות בחזית.'],
        ['الثغرة وصمود السويس', 'The Breach and Suez’s Resistance', 'הצליחה ועמידתה של סואץ'],
        ['تسللت قوة إسرائيلية غرب القناة، لكن مدينة السويس صمدت وأفشلت دخولها.', 'An Israeli force infiltrated west of the canal, but the city of Suez held out and prevented its entry.', 'כוח ישראלי חדר ממערב לתעלה, אך העיר סואץ עמדה בפניו ומנעה את כניסתו.'],
        ['الأسلحة والمعدات', 'Weapons and Equipment', 'נשק וציוד'],
        ['صواريخ سام', 'SAM Missiles', 'טילי קרקע-אוויר'],
        ['شبكة الدفاع الجوي التي حمت القوات العابرة من الضربات الجوية.', 'The air-defense network protected crossing forces from air strikes.', 'מערך ההגנה האווירית הגן על הכוחות החוצים מפני תקיפות אוויריות.'],
        ['صواريخ مالوتكا', 'Malyutka Missiles', 'טילי מאליוטקה'],
        ['صواريخ موجهة مضادة للدبابات حملها الجنود ودمروا بها أعدادا من دبابات العدو.', 'Infantry carried guided anti-tank missiles and used them to destroy many enemy tanks.', 'חיילי הרגלים נשאו טילים מונחים נגד טנקים והשמידו באמצעותם טנקי אויב רבים.'],
        ['مضخات المياه', 'Water Pumps', 'משאבות מים'],
        ['فتحت ثغرات في الساتر الترابي في وقت قصير.', 'They quickly opened breaches in the sand embankment.', 'הן פרצו במהירות פתחים בסוללת העפר.'],
        ['القوارب والكباري', 'Boats and Bridges', 'סירות וגשרים'],
        ['نقلت الجنود أولا ثم الدبابات والمعدات إلى الضفة الشرقية.', 'They carried soldiers first, then tanks and equipment, to the east bank.', 'העבירו תחילה חיילים ולאחר מכן טנקים וציוד לגדה המזרחית.'],
        ['مقاتلات ميج-٢١', 'MiG-21 Fighters', 'מטוסי מיג-21'],
        ['من مقاتلات سلاح الجو المصري في المعارك الجوية.', 'Among the Egyptian Air Force fighters used in aerial battles.', 'מטוסי קרב של חיל האוויר המצרי שהשתתפו בקרבות האוויריים.'],
        ['دبابات تي-٥٥ وتي-٦٢', 'T-55 and T-62 Tanks', 'טנקי T-55 ו-T-62'],
        ['شكلت قوة الدبابات في المعارك البرية.', 'They formed the armored force in the ground battles.', 'היוו את כוח השריון בקרבות היבשתיים.'],
        ['نتائج الحرب', 'The War’s Results', 'תוצאות המלחמה'],
        ['١٩٧٤', '1974', '1974'],
        ['فض الاشتباك الأول', 'The First Disengagement Agreement', 'הסכם הפרדת הכוחות הראשון'],
        ['انسحبت القوات الإسرائيلية من غرب القناة ومن جزء من شرقها.', 'Israeli forces withdrew from west of the canal and from part of its eastern bank.', 'הכוחות הישראליים נסוגו ממערב לתעלה ומחלק מהגדה המזרחית שלה.'],
        ['١٩٧٩', '1979', '1979'],
        ['معاهدة السلام', 'The Peace Treaty', 'הסכם השלום'],
        ['وقعت مصر وإسرائيل المعاهدة، وحددت جدول الانسحاب من سيناء.', 'Egypt and Israel signed the treaty, which set a timetable for withdrawal from Sinai.', 'מצרים וישראל חתמו על ההסכם, שקבע לוח זמנים לנסיגה מסיני.'],
        ['١٩٨٢', '1982', '1982'],
        ['عودة سيناء', 'Return of Sinai', 'השבת סיני'],
        ['اكتمل الانسحاب في ٢٥ أبريل ما عدا منطقة طابا.', 'The withdrawal was completed on April 25, except for the Taba area.', 'הנסיגה הושלמה ב-25 באפריל, למעט אזור טאבה.'],
        ['١٩٨٩', '1989', '1989'],
        ['عودة طابا', 'Return of Taba', 'השבת טאבה'],
        ['رُفع العلم المصري على طابا في ١٩ مارس بعد تحكيم دولي.', 'The Egyptian flag was raised over Taba on March 19 after international arbitration.', 'דגל מצרים הונף בטאבה ב-19 במרץ לאחר בוררות בינלאומית.'],
        ['معرض الصور', 'Photo Gallery', 'גלריית תמונות'],
        ['لحظة العبور', 'The Crossing', 'הצליחה'],
        ['الكباري على القناة', 'Bridges across the Canal', 'הגשרים מעל התעלה'],
        ['المقاتلات', 'Fighter Aircraft', 'מטוסי קרב'],
        ['الدبابات', 'Tanks', 'טנקים'],
        ['رفع العلم', 'Raising the Flag', 'הנפת הדגל'],
        ['الماذن العالية', 'The High Minarets', 'הצריחים הגבוהים'],
        ['جمال على', 'Gamal Ali', 'גמאל עלי'],
        ['مسؤول الفرونت اند و تصميمات', 'Front-end and design lead', 'אחראי פיתוח צד-לקוח ועיצוב'],
        ['جمال علي', 'Gamal Ali', 'גמאל עלי'],
        ['مسؤول الفرونت اند و شكل موقع و الصور', 'Responsible for the front end, site layout, and images', 'אחראי על צד-הלקוח, מבנה האתר והתמונות'],
        ['نبيل نجيب', 'Nabil Naguib', 'נביל נגיב'],
        ['مبرمج الباك اند و الفرونت اند', 'Back-end and front-end developer', 'מפתח צד-שרת וצד-לקוח'],
        ['مبرمج الباك اند و الفرونت اند و ساعد في صور وفيديوهات و وضع ترتيب ملفات و قام باضافه الانيميشن', 'Back-end and front-end developer; contributed images and videos, organized files, and added animations.', 'מפתח צד-שרת וצד-לקוח; סייע בתמונות ובסרטונים, ארגן קבצים והוסיף אנימציות.'],
        ['محمد هاني جادو', 'Mohamed Hany Gado', 'מוחמד האני גאדו'],
        ['جمع الداتا و جاب صور و فديوهات', 'Collected information, photos, and videos', 'אסף מידע, תמונות וסרטונים'],
        ['جمع الداتا و جاب صور و فديوهات و جاب معظم الاحداث اللي حصلت و بحث عن الاحداث اللي حصلت و تصاعدات', 'Collected information, photos, and videos, researched key events and developments.', 'אסף מידע, תמונות וסרטונים, וחקר את האירועים המרכזיים ואת התפתחותם.'],
        ['المصادر', 'Sources', 'מקורות'],
        ['كتاب التاريخ المدرسي', 'School history textbook', 'ספר הלימוד בהיסטוריה'],
        ['مذكرات حرب أكتوبر، الفريق سعد الدين الشاذلي', 'The October War Memoirs, Lieutenant General Saad El Shazly', 'זיכרונות מלחמת אוקטובר, רב-אלוף סעד א-שאזלי'],
        ['مذكرات الجمسي: حرب أكتوبر ١٩٧٣، المشير محمد عبد الغني الجمسي', 'The Memoirs of El-Gamasy: The 1973 October War, Field Marshal Mohamed Abdel Ghany El-Gamasy', 'זיכרונות אל-גמסי: מלחמת אוקטובר 1973, פילדמרשל מוחמד עבד אל-ע׳ני אל-גמסי'],
        ['الهيئة العامة للاستعلامات (sis.gov.eg)', 'State Information Service (sis.gov.eg)', 'שירות המידע הממלכתי (sis.gov.eg)'],
        ['المقاطع الأرشيفية في الجدول الزمني:', 'Archival footage in the timeline:', 'קטעי ארכיון בציר הזמן:'],
        ['إغلاق', 'Close', 'סגור'],
        ['قادة', 'Leaders', 'מנהיגים'],
        ['قادة الجبهة', 'Front Leaders', 'מנהיגי החזית'],
        ['السورية', 'Syrian', 'הסורית'],
        ['أبرز القادة السوريين خلال حرب أكتوبر.', 'Leading Syrian figures during the October War.', 'המנהיגים הסורים הבולטים במלחמת אוקטובר.'],
        ['اكتشف القادة', 'Discover the Leaders', 'גלו את המנהיגים'],
        ['الجبهة السورية', 'The Syrian Front', 'החזית הסורית'],
        ['قادة سوريا في حرب أكتوبر', 'Syrian Leaders in the October War', 'מנהיגי סוריה במלחמת אוקטובר'],
        ['تعرف على بعض القادة الذين تولوا مسؤوليات سياسية وعسكرية خلال الحرب.', 'Learn about some of the leaders who held political and military responsibilities during the war.', 'הכירו כמה מהמנהיגים שמילאו תפקידים מדיניים וצבאיים במהלך המלחמה.'],
        ['رئيس الجمهورية والقائد العام للقوات المسلحة', 'President and Commander-in-Chief of the Armed Forces', 'נשיא ומפקד הכוחות המזוינים העליון'],
        ['حافظ الأسد', 'Hafez al-Assad', 'חאפז אל-אסד'],
        ['كان رئيسًا لسوريا والقائد العام للقوات المسلحة خلال حرب أكتوبر، وشارك في تنسيق قرار الحرب مع مصر.', 'He was Syria’s president and commander-in-chief during the October War and helped coordinate the decision to go to war with Egypt.', 'היה נשיא סוריה והמפקד העליון במהלך מלחמת אוקטובר, וסייע בתיאום ההחלטה לצאת למלחמה עם מצרים.'],
        ['وزير الدفاع', 'Minister of Defense', 'שר ההגנה'],
        ['مصطفى طلاس', 'Mustafa Tlass', 'מוסטפא טלאס'],
        ['تولى وزارة الدفاع السورية خلال الحرب، وأشرف ضمن القيادة العسكرية على شؤون القوات والاستعدادات.', 'He served as Syria’s defense minister during the war and oversaw military preparations and force matters as part of the leadership.', 'כיהן כשר ההגנה של סוריה במהלך המלחמה ופיקח במסגרת ההנהגה הצבאית על הכוחות וההכנות.'],
        ['رئيس هيئة الأركان', 'Chief of the General Staff', 'ראש המטה הכללי'],
        ['يوسف شكور', 'Youssef Chakkour', 'יוסף שקור'],
        ['تولى رئاسة هيئة الأركان العامة السورية خلال حرب أكتوبر، ضمن القيادة المسؤولة عن إدارة العمليات العسكرية.', 'He served as chief of the Syrian General Staff during the October War, as part of the leadership responsible for military operations.', 'כיהן כראש המטה הכללי של סוריה במהלך מלחמת אוקטובר, כחלק מההנהגה שאחראית לניהול המבצעים הצבאיים.'],
        ['العودة إلى صفحات القادة', 'Back to the Leaders', 'חזרה לדפי המנהיגים'],
        ['القيادات', 'Leaders', 'מנהיגים'],
        ['الإسرائيلية', 'Israeli', 'הישראליים'],
        ['أبرز القيادات السياسية والعسكرية الإسرائيلية خلال حرب أكتوبر.', 'Leading Israeli political and military figures during the October War.', 'המנהיגים הפוליטיים והצבאיים הישראלים הבולטים במלחמת אוקטובר.'],
        ['اكتشف القيادات', 'Discover the Leaders', 'גלו את המנהיגים'],
        ['القيادة الإسرائيلية', 'The Israeli Leadership', 'ההנהגה הישראלית'],
        ['قيادات إسرائيل في حرب أكتوبر', 'Israeli Leaders in the October War', 'מנהיגי ישראל במלחמת אוקטובר'],
        ['تعرف على بعض المسؤولين السياسيين والعسكريين في إسرائيل خلال الحرب.', 'Learn about some of Israel’s political and military officials during the war.', 'הכירו כמה מהפקידים הפוליטיים והצבאיים בישראל במהלך המלחמה.'],
        ['رئيسة الوزراء', 'Prime Minister', 'ראש הממשלה'],
        ['غولدا مائير', 'Golda Meir', 'גולדה מאיר'],
        ['كانت رئيسة وزراء إسرائيل خلال حرب أكتوبر، وتولت قيادة الحكومة في أثناء الحرب.', 'She was Israel’s prime minister during the October War and led the government throughout the conflict.', 'הייתה ראש ממשלת ישראל במהלך מלחמת אוקטובר והובילה את הממשלה בזמן המלחמה.'],
        ['موشيه ديان', 'Moshe Dayan', 'משה דיין'],
        ['تولى وزارة الدفاع الإسرائيلية خلال الحرب، وكان من أبرز المسؤولين عن القرارات العسكرية.', 'He served as Israel’s defense minister during the war and was one of the key officials responsible for military decisions.', 'כיהן כשר הביטחון של ישראל במהלך המלחמה והיה בין האחראים המרכזיים להחלטות הצבאיות.'],
        ['دافيد إلعازار', 'David Elazar', 'דוד אלעזר'],
        ['شغل منصب رئيس هيئة الأركان العامة الإسرائيلية خلال حرب أكتوبر، وتولى مسؤولية القيادة العسكرية العليا.', 'He served as chief of the Israeli General Staff during the October War and held top military command responsibility.', 'כיהן כרמטכ״ל במהלך מלחמת אוקטובר ונשא באחריות לפיקוד הצבאי העליון.'],
        ['السادس من أكتوبر ١٩٧٣', 'October 6, 1973', '6 באוקטובר 1973'],
        ['النصر', 'Victory', 'הניצחון'],
        ['تعرف على أبرز القادة الذين أسهموا في التخطيط لحرب أكتوبر وإدارتها.', 'Meet the key leaders who helped plan and direct the October War.', 'הכירו את המנהיגים המרכזיים שסייעו בתכנון מלחמת אוקטובר ובניהולה.'],
        ['اكتشف القادة', 'Discover the Leaders', 'גלו את המנהיגים'],
        ['رجال صنعوا التاريخ', 'The Men Who Made History', 'האנשים שעשו היסטוריה'],
        ['أدوار قيادية مختلفة اجتمعت في التخطيط والاستعداد وإدارة معركة العبور.', 'Leaders with different roles came together to plan, prepare for, and direct the crossing.', 'מנהיגים בתפקידים שונים חברו לתכנון, להכנה ולניהול הצליחה.'],
        ['رئيس الجمهورية والقائد الأعلى للقوات المسلحة', 'President and Supreme Commander of the Armed Forces', 'נשיא ומפקד הכוחות המזוינים העליון'],
        ['الرئيس محمد أنور السادات', 'President Mohamed Anwar El Sadat', 'הנשיא מוחמד אנואר א-סאדאת'],
        ['الفريق أول أحمد إسماعيل علي', 'General Ahmed Ismail Ali', 'גנרל אחמד איסמעיל עלי'],
        ['الفريق سعد الدين الشاذلي', 'General Saad El Shazly', 'גנרל סעד א-שאזלי'],
        ['الفريق محمد عبدالغني الجمسي', 'General Mohamed Abdel Ghany El-Gamasy', 'גנרל מוחמד עבד אל-ע׳ני אל-גמסי'],
        ['اللواء حسين الشافعي', 'Major General Hussein El Shafei', 'אלוף חוסיין א-שאפעי'],
        ['المشير عبد الحليم أبو غزالة', 'Field Marshal Abdel Halim Abu Ghazala', 'פילדמרשל עבד אל-חלים אבו ע׳זאלה'],
        ['الفريق أول عبد المنعم رياض', 'General Abdel Moneim Riad', 'גנרל עבד אל-מונעם ריאד'],
        ['الفريق أحمد بدوي', 'General Ahmed Badawy', 'גנרל אחמד בדאווי'],
        ['الفريق محمد فوزي', 'General Mohamed Fawzi', 'גנרל מוחמד פאוזי'],
        ['الفريق محمد صادق', 'General Mohamed Sadek', 'גנרל מוחמד סאדק'],
        ['محمد أنور السادات', 'Mohamed Anwar El Sadat', 'מוחמד אנואר א-סאדאת'],
        ['اتخذ قرار الحرب وحدد موعدها بالتنسيق مع سوريا. وبعد الحرب اتجه إلى المفاوضات، التي انتهت بتوقيع معاهدة السلام عام ١٩٧٩.', 'He made the decision to go to war and set its date in coordination with Syria. After the war, he pursued negotiations that led to the 1979 peace treaty.', 'החליט לצאת למלחמה וקבע את מועדה בתיאום עם סוריה. לאחר המלחמה פנה למשא ומתן שהוביל להסכם השלום ב-1979.'],
        ['تولى وزارة الحربية والقيادة العامة للقوات المسلحة قبل الحرب بنحو عام، وأشرف على الإعداد والتدريب وإدارة العمليات.', 'He became Minister of War and Commander-in-Chief about a year before the war, overseeing preparations, training, and operations.', 'מונה לשר המלחמה ולמפקד העליון כשנה לפני המלחמה, ופיקח על ההכנות, האימונים וניהול המבצעים.'],
        ['شارك في تطوير خطط العمليات وإعداد القوات للعبور، وسجل تجربته وشهادته عن الحرب في مذكراته.', 'He helped develop operational plans and prepare the forces for the crossing, and recorded his experience of the war in his memoirs.', 'סייע בפיתוח תוכניות המבצע ובהכנת הכוחות לצליחה, ותיעד את ניסיונו ועדותו על המלחמה בזיכרונותיו.'],
        ['رئيس هيئة عمليات القوات المسلحة', 'Chief of Operations of the Armed Forces', 'ראש אגף המבצעים של הכוחות המזוינים'],
        ['قائد محمد عبدالغني الجمسي', 'Mohamed Abdel Ghany El-Gamasy', 'מוחמד עבד אל-ע׳ני אל-גמסי'],
        ['وضع التوقيت المناسب للهجوم.', 'He chose the appropriate time for the attack.', 'הוא קבע את העיתוי המתאים למתקפה.'],
        ['قائد عمليات وعضو قيادي في حرب أكتوبر', 'Operations commander and senior leader in the October War', 'מפקד מבצעים ומנהיג בכיר במלחמת אוקטובר'],
        ['حسين الشافعي', 'Hussein El Shafei', 'חוסיין א-שאפעי'],
        ['من الشخصيات العسكرية البارزة التي ساهمت في تخطيط وتنفيذ العمليات، وبرز دوره في دعم تنفيذ الرؤية القتالية لجيش مصر.', 'A prominent military figure who contributed to planning and carrying out operations and supported the Egyptian Army’s operational vision.', 'דמות צבאית בולטת שתרמה לתכנון המבצעים ולביצועם וסייעה במימוש התפיסה המבצעית של צבא מצרים.'],
        ['المشير عبد الحليم أبو غزالة', 'Field Marshal Abdel Halim Abu Ghazala', 'פילדמרשל עבד אל-חלים אבו ע׳זאלה'],
        ['القائد العسكري والسياسي البارز', 'Prominent military and political leader', 'מנהיג צבאי ופוליטי בולט'],
        ['عبد الحليم أبو غزالة', 'Abdel Halim Abu Ghazala', 'עבד אל-חלים אבו ע׳זאלה'],
        ['كان من قادة الجيش المصري الذين لعبوا دورًا كبيرًا في إعادة بناء القوات المسلحة وتحضيرها لاستعادة الأرض، وترك بصمة واضحة في تاريخ النصر.', 'He was among the Egyptian Army leaders who helped rebuild and prepare the armed forces to reclaim the land, leaving a lasting mark on the history of victory.', 'היה בין מפקדי צבא מצרים שסייעו בבנייה מחדש ובהכנת הכוחות להשבת השטח, והותיר חותם בתולדות הניצחון.'],
        ['الفريق أول عبد المنعم رياض', 'General Abdel Moneim Riad', 'גנרל עבד אל-מונעם ריאד'],
        ['وزير الحربية ورئيس أركان حرب القوات المسلحة', 'Minister of War and Chief of Staff of the Armed Forces', 'שר המלחמה וראש המטה הכללי של הכוחות המזוינים'],
        ['عبد المنعم رياض', 'Abdel Moneim Riad', 'עבד אל-מונעם ריאד'],
        ['من أبرز القادة المصريين الذين أسهموا في إعداد الجيش لمرحلة الاستعداد للحرب، وترك بصمة قوية في طريق النصر وتحصين الجبهة المصرية.', 'One of Egypt’s leading commanders, he helped prepare the army for war and strengthen the Egyptian front.', 'ממפקדי מצרים הבולטים שסייעו להכין את הצבא למלחמה ולחזק את החזית המצרית.'],
        ['الفريق أحمد بدوي', 'General Ahmed Badawy', 'גנרל אחמד בדאווי'],
        ['قائد عسكري بارز في حرب أكتوبر', 'Prominent military commander in the October War', 'מפקד צבאי בולט במלחמת אוקטובר'],
        ['أحمد بدوي', 'Ahmed Badawy', 'אחמד בדאווי'],
        ['شارك في التخطيط والتنفيذ العسكري خلال مرحلة العبور، وكانت مساهماته في إدارة المعارك جزءًا من الجهد الذي حقق نجاحات تاريخية للقوات المسلحة.', 'He took part in planning and carrying out the crossing. His role in directing battles contributed to the armed forces’ historic achievements.', 'השתתף בתכנון ובביצוע הצבאי בשלב הצליחה. תרומתו לניהול הקרבות הייתה חלק מהמאמץ שהביא להישגים היסטוריים.'],
        ['الفريق محمد فوزي', 'General Mohamed Fawzi', 'גנרל מוחמד פאוזי'],
        ['قائد عسكري في الجبهة المصرية', 'Military commander on the Egyptian front', 'מפקד צבאי בחזית המצרית'],
        ['محمد فوزي', 'Mohamed Fawzi', 'מוחמד פאוזי'],
        ['من القامات العسكرية التي أسهمت في تنظيم الجبهة ورفع جاهزية القوات، وبرز دوره في دعم تنفيذ الخطة العسكرية التي أدت إلى التقدم والإنجاز.', 'He helped organize the front and improve the forces’ readiness, supporting the military plan that led to progress and achievement.', 'סייע בארגון החזית ובהעלאת הכוננות, ותמך בביצוע התוכנית הצבאית שהובילה להתקדמות ולהישגים.'],
        ['الفريق محمد صادق', 'General Mohamed Sadek', 'גנרל מוחמד סאדק'],
        ['قيادي عسكري في القوات المسلحة', 'Military leader in the Armed Forces', 'מנהיג צבאי בכוחות המזוינים'],
        ['محمد صادق', 'Mohamed Sadek', 'מוחמד סאדק'],
        ['كان من القادة الذين ساهموا في تحضير القوات وإدارتها خلال المرحلة الحاسمة، وقدرته على القيادة والالتزام كانت جزءًا من صناعة النصر في أكتوبر.', 'He helped prepare and lead the forces during the decisive phase. His leadership and commitment contributed to the October victory.', 'סייע בהכנת הכוחות ובהובלתם בשלב המכריע. מנהיגותו ומחויבותו תרמו לניצחון באוקטובר.'],
        ['اقرأ المزيد', 'Read More', 'קראו עוד'],
        ['العودة إلى قادة النصر', 'Back to the Victory Leaders', 'חזרה למנהיגי הניצחון'],
        ['اقرأ', 'Read', 'קראו'],
        ['المزيد', 'More', 'עוד'],
        ['تعرف على قادة مصر الذين أسهموا في نصر أكتوبر ١٩٧٣.', 'Learn about the Egyptian leaders who contributed to the 1973 October victory.', 'הכירו את מנהיגי מצרים שתרמו לניצחון באוקטובר 1973.'],
        ['رئيس الجمهورية والقائد الأعلى للقوات المسلحة. اتخذ قرار الحرب وحدد موعدها بالتنسيق مع سوريا. وبعد الحرب اتجه إلى المفاوضات التي انتهت بتوقيع معاهدة السلام عام ١٩٧٩.', 'President and Supreme Commander of the Armed Forces. He made the decision to go to war and set its date in coordination with Syria. After the war, he pursued negotiations that led to the 1979 peace treaty.', 'נשיא ומפקד הכוחות המזוינים העליון. החליט לצאת למלחמה וקבע את מועדה בתיאום עם סוריה. לאחר המלחמה פנה למשא ומתן שהוביל להסכם השלום ב-1979.'],
        ['وزير الحربية والقائد العام للقوات المسلحة خلال حرب أكتوبر. أشرف على الاستعداد للحرب وإدارة العمليات العسكرية، وعمل على تنسيق جهود القوات المسلحة لتحقيق العبور.', 'Minister of War and Commander-in-Chief during the October War. He oversaw preparations and military operations and coordinated the armed forces’ efforts for the crossing.', 'שר המלחמה והמפקד העליון במהלך מלחמת אוקטובר. פיקח על ההכנות והמבצעים הצבאיים ותיאם את מאמצי הכוחות המזוינים לצליחה.'],
        ['رئيس أركان حرب القوات المسلحة خلال حرب أكتوبر. أسهم في إعداد خطط العمليات وتنظيم عبور القوات، وسجل تجربته وشهادته عن الحرب في مذكراته.', 'Chief of Staff during the October War. He helped prepare operational plans and organize the crossing, and documented his experience in his memoirs.', 'ראש המטה הכללי במלחמת אוקטובר. סייע בהכנת תוכניות המבצע ובארגון הצליחה, ותיעד את ניסיונו בזיכרונותיו.'],
        ['رئيس هيئة عمليات القوات المسلحة خلال حرب أكتوبر. وضع التوقيت المناسب للهجوم، وساهم في تطوير خطط العمليات وإعداد القوات للعبور.', 'Chief of Operations of the Armed Forces during the October War. He chose the timing of the attack and helped develop operational plans and prepare the forces for the crossing.', 'ראש אגף המבצעים של הכוחות המזוינים במלחמת אוקטובר. קבע את עיתוי המתקפה וסייע בפיתוח תוכניות המבצע ובהכנת הכוחות לצליחה.'],
        ['من القادة العسكريين الذين ساهموا في دعم عمليات أكتوبر، وبرز دوره في التخطيط والتنفيذ داخل الجيش المصري، بما عكس روح الانضباط والالتزام لتحقيق النصر.', 'A military leader who supported the October operations, contributing to planning and execution in the Egyptian Army with discipline and commitment.', 'מפקד צבאי שסייע במבצעי אוקטובר ותרם לתכנון ולביצוע בצבא מצרים, תוך הפגנת משמעת ומחויבות להשגת הניצחון.'],
        ['قائد عسكري بارز ساهم في إعادة تنظيم الجبهة المصرية وتحضير القوات لاستعادة الأرض، وأصبح أحد الركائز التي أسهمت في نجاحها في حرب أكتوبر.', 'A prominent military commander who helped reorganize the Egyptian front and prepare forces to reclaim the land, contributing to the success of the October War.', 'מפקד צבאי בולט שסייע בארגון מחדש של החזית המצרית ובהכנת הכוחות להשבת השטח, ותרם להצלחת מלחמת אוקטובר.'],
        ['من أبرز القادة المصريين الذين أسهموا في إعداد الجيش للحرب، وترك بصمة واضحة في البناء العسكري والتخطيط الاستراتيجي الذي مهد لنجاح أكتوبر.', 'One of Egypt’s leading commanders, he helped prepare the army for war and contributed to the military development and strategic planning behind the October successes.', 'ממפקדי מצרים הבולטים שסייעו להכין את הצבא למלחמה ותרמו לבניין הצבאי ולתכנון האסטרטגי שהכינו את הדרך להצלחות אוקטובר.'],
        ['شارك في التخطيط والتنفيذ العسكري خلال المرحلة الحاسمة من حرب أكتوبر، وساهم في دعم الجبهة المصرية بإدارة العمليات وتحفيز القوات.', 'He took part in planning and carrying out military operations during the decisive phase of the October War, helping the Egyptian front by directing operations and motivating the forces.', 'השתתף בתכנון ובביצוע הצבאי בשלב המכריע של מלחמת אוקטובר וסייע לחזית המצרית בניהול המבצעים ובעידוד הכוחות.'],
        ['من القامات العسكرية التي أسهمت في تجهيز الجبهة والرفع من جاهزية القوات، وبرز دوره في تفعيل الخطة التي حققت الأهداف العسكرية في المعركة.', 'He helped prepare the front and raise the forces’ readiness, and played a role in implementing the plan that achieved the military objectives.', 'סייע בהכנת החזית ובהעלאת הכוננות, ותרם להפעלת התוכנית שהשיגה את היעדים הצבאיים.'],
        ['كان من القادة العسكريين الذين ساهموا في إعداد القوات وإدارتها خلال المرحلة الحرجة من الحرب، وترك أثرًا واضحًا في نجاح تلك الحملة.', 'He helped prepare and lead the forces during a critical phase of the war, contributing to the campaign’s success.', 'סייע בהכנת הכוחות ובהובלתם בשלב קריטי של המלחמה, ותרם להצלחת המערכה.'],
        ['اختبر نفسك', 'Test Yourself', 'בחן את עצמך'],
        ['متى بدأت حرب أكتوبر؟', 'When did the October War begin?', 'מתי החלה מלחמת אוקטובר?'],
        ['ما اسم خطة العبور المصرية؟', 'What was the name of Egypt’s crossing plan?', 'מה היה שמה של תוכנית הצליחה המצרית?'],
        ['ما الخط الدفاعي الذي حطمه الجيش المصري شرق القناة؟', 'Which defensive line did the Egyptian Army breach east of the canal?', 'איזה קו הגנה פרץ צבא מצרים ממזרח לתעלה?'],
        ['ما الوسيلة التي فتحت الساتر الترابي بسرعة؟', 'What was used to quickly breach the sand embankment?', 'באיזה אמצעי נפרצה במהירות סוללת העפר?'],
        ['ما رقم قرار مجلس الأمن الذي دعا إلى وقف إطلاق النار؟', 'Which UN Security Council resolution called for a ceasefire?', 'איזו החלטת מועצת הביטחון של האו״ם קראה להפסקת אש?'],
        ['٥ يونيو ١٩٦٧', 'June 5, 1967', '5 ביוני 1967'],
        ['٢٦ يوليو ١٩٥٦', 'July 26, 1956', '26 ביולי 1956'],
        ['١٩ مارس ١٩٨٩', 'March 19, 1989', '19 במרץ 1989'],
        ['العملية الفجر', 'Operation Dawn', 'מבצע השחר'],
        ['العملية الصقر', 'Operation Falcon', 'מבצע הבז'],
        ['العملية النسر', 'Operation Eagle', 'מבצע הנשר'],
        ['خط ماجينو', 'The Maginot Line', 'קו מז׳ינו'],
        ['خط المنصورة', 'The Mansoura Line', 'קו מנסורה'],
        ['خط السويس', 'The Suez Line', 'קו סואץ'],
        ['الألغام', 'Mines', 'מוקשים'],
        ['الطائرات', 'Aircraft', 'מטוסים'],
        ['المدفعية الثقيلة', 'Heavy artillery', 'ארטילריה כבדה'],
        ['٣٣٨', '338', '338'],
        ['٢٤٢', '242', '242'],
        ['١٨١', '181', '181'],
        ['٦٧٨', '678', '678'],
        ['السؤال التالي', 'Next Question', 'השאלה הבאה'],
        ['عرض النتيجة', 'Show Results', 'הצגת התוצאות'],
        ['السؤال', 'Question', 'שאלה'],
        ['من', 'of', 'מתוך'],
        ['ممتاز! أنت تعرف الكثير عن حرب أكتوبر.', 'Excellent! You know a lot about the October War.', 'מצוין! אתם יודעים הרבה על מלחמת אוקטובר.'],
        ['جيد جدا! راجع الأقسام مرة أخرى لتكمل المعلومات.', 'Very good! Review the sections to learn more.', 'טוב מאוד! עברו שוב על הפרקים כדי להשלים את הידע.'],
        ['تصفح أقسام الموقع ثم أعد المحاولة.', 'Explore the site sections, then try again.', 'עברו בין פרקי האתר ונסו שוב.'],
        ['إعادة الاختبار', 'Retake the Quiz', 'נסה שוב'],
        ['تعذر تشغيل الفيديو', 'Video could not be played', 'לא ניתן להפעיל את הסרטון'],
        ['مقطع أرشيفي', 'Archive Footage', 'קטע ארכיון'],
        ['الملف موجود لكن تالف أو ترميزه غير مدعوم (حوّله إلى mp4 بترميز H.264)', 'The file is corrupted or uses an unsupported codec (convert it to MP4 with H.264)', 'הקובץ פגום או משתמש בקידוד לא נתמך (יש להמיר ל-MP4 בקידוד H.264)'],
        ['خطأ في الشبكة أثناء التحميل', 'A network error occurred while loading', 'אירעה שגיאת רשת במהלך הטעינה'],
        ['الملف غير موجود في هذا المسار، أو صيغته غير مدعومة', 'The file was not found at this path, or its format is unsupported', 'הקובץ לא נמצא בנתיב זה או שהפורמט אינו נתמך'],
        ['السادس من أكتوبر ١٩٧٣، قادة النصر', 'October 6, 1973, Victory Leaders', '6 באוקטובר 1973, מנהיגי הניצחון']
    ];

    var dictionaries = { en: Object.create(null), he: Object.create(null) };
    entries.forEach(function (entry) {
        dictionaries.en[entry[0]] = entry[1];
        dictionaries.he[entry[0]] = entry[2];
    });

    var textOriginals = new WeakMap();
    var attributeOriginals = new WeakMap();
    var originalDocumentTitle = document.title;
    var supported = ['ar', 'en', 'he'];
    var currentLanguage = 'ar';
    var toggleLabels = { ar: 'English', en: 'עברית', he: 'العربية' };

    function normalize(value) {
        return value.replace(/\s+/g, ' ').trim();
    }

    function translate(value, language) {
        var key = normalize(value);
        return dictionaries[language] && dictionaries[language][key] || value;
    }

    function translateText(language) {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var node;
        while ((node = walker.nextNode())) {
            if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
            var parent = node.parentElement;
            if (parent && parent.closest('[data-language-toggle]')) continue;
            node.nodeValue = translate(textOriginals.get(node), language);
        }
    }

    function translateAttributes(language) {
        var elements = document.querySelectorAll(
            '[alt], [title], [data-title], [data-text], [aria-label], [placeholder], meta[name="description"]'
        );
        elements.forEach(function (element) {
            ['alt', 'title', 'data-title', 'data-text', 'aria-label', 'placeholder', 'content'].forEach(function (name) {
                if (!element.hasAttribute(name)) return;
                var original = attributeOriginals.get(element);
                if (!original) {
                    original = {};
                    attributeOriginals.set(element, original);
                }
                if (!Object.prototype.hasOwnProperty.call(original, name)) {
                    original[name] = element.getAttribute(name);
                }
                element.setAttribute(name, translate(original[name], language));
            });
        });
    }

    function setLanguage(language) {
        if (supported.indexOf(language) === -1) {
            console.error('Unsupported language:', language);
            return;
        }
        currentLanguage = language;
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
        document.title = translate(originalDocumentTitle, language);
        translateText(language);
        translateAttributes(language);
        document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
            button.textContent = toggleLabels[language];
            button.setAttribute('aria-label', language === 'ar' ? 'تغيير اللغة إلى الإنجليزية'
                : language === 'en' ? 'Change language to Hebrew' : 'שינוי השפה לערבית');
        });
        try {
            localStorage.setItem('school-site-language', language);
        } catch (error) {
            console.warn('Could not save the language preference:', error);
        }
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: language } }));
    }

    document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
        button.addEventListener('click', function () {
            var next = supported[(supported.indexOf(currentLanguage) + 1) % supported.length];
            setLanguage(next);
        });
    });

    var savedLanguage = 'ar';
    try {
        var storedLanguage = localStorage.getItem('school-site-language');
        if (supported.indexOf(storedLanguage) !== -1) savedLanguage = storedLanguage;
    } catch (error) {
        console.warn('Could not read the saved language preference:', error);
    }

    window.siteI18n = {
        t: function (value) { return translate(value, currentLanguage); },
        originalAttribute: function (element, name) {
            var original = attributeOriginals.get(element);
            return original && Object.prototype.hasOwnProperty.call(original, name)
                ? original[name] : element.getAttribute(name);
        },
        get language() { return currentLanguage; },
        setLanguage: setLanguage
    };
    setLanguage(savedLanguage);
})();
