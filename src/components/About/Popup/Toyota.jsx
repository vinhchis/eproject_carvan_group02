import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'

function Popup_Toyota() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                See More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Toyota</Modal.Title>
                </Modal.Header>
                <Modal.Body><h3>Detail</h3>
                    <p>Toyota Motor Corporation  is a Japanese multinational automotive
                        manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and
                        incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world,
                        producing about 10 million vehicles per year</p>

                    <p>The company was originally founded as a spinoff of Toyota Industries, a machine maker started by Sakichi Toyoda, Kiichiro's father. Both companies are now part of the Toyota Group, one of the largest conglomerates in the world. While still a department of Toyota Industries, the company developed its first product, the Type A engine, in 1934 and its first passenger car in 1936, the Toyota AA</p>

                    <p>After World War II, Toyota benefited from Japan's alliance with the United States to learn from American automakers and other companies, which gave rise to The Toyota Way (a management philosophy) and the Toyota Production System (a lean manufacturing practice) that transformed the small company into a leader in the industry and was the subject of many academic studies</p>

                    <p>In the 1960s, Toyota took advantage of the rapidly growing Japanese economy to sell cars to a growing middle-class, leading to the development of the Toyota Corolla, which became the world's all-time best-selling automobile. The booming economy also funded an international expansion that allowed Toyota to grow into one of the largest automakers in the world, the largest company in Japan and the ninth-largest company in the world by revenue, as of December 2020. Toyota was the world's first automobile manufacturer to produce more than 10 million vehicles per year, a record set in 2012, when it also reported the production of its 200 millionth vehicle</p>

                    <p>Toyota was praised for being a leader in the development and sales of more fuel-efficient hybrid electric vehicles, starting with the introduction of the Toyota Prius in 1997. The company now sells more than 40 hybrid vehicle models around the world. More recently, the company has also been criticized for being slow to adopt all-electric vehicles and focusing on the development of hydrogen fuel cell vehicles, like the Toyota Mirai, a technology that is costlier and has fallen far behind electric batteries</p>

                    <p>As of 2022, the Toyota Motor Corporation produces vehicles under four brands: Daihatsu, Hino, Lexus and the namesake Toyota. The company also holds a 20% stake in Subaru Corporation, a 5.1% stake in Mazda, a 4.9% stake in Suzuki, a 4.6% stake in Isuzu, a 3.8% stake in Yamaha Motor Corporation, and a 2.8% stake in Panasonic, as well as stakes in vehicle manufacturing joint-ventures in China (FAW Toyota and GAC Toyota), the Czech Republic (TPCA), India (Toyota Kirloskar) and the United States (MTMUS)</p>

                    <p>Toyota is listed on the London Stock Exchange, Nagoya Stock Exchange, New York Stock Exchange and on the Tokyo Stock Exchange, where its stock is a component of the Nikkei 225 and TOPIX Core30 indice</p>


                    <h3>History</h3>
                    {/* 1920-1930 */}
                    <b>1920s–1930s</b>
                    <p>In 1924, Sakichi Toyoda invented the Toyoda Model G Automatic Loom. The principle of jidoka, which means the machine stops itself when a problem occurs, became later a part of the Toyota Production System. Looms were built on a small production line. In 1929, the patent for the automatic loom was sold to the British company Platt Brothers, generating the starting capital for automobile development</p>

                    <p>Under the direction of the founder's son, Kiichiro Toyoda, Toyoda Automatic Loom Works established an Automobile Division on September 1, 1933, and formally declared its intention to begin manufacturing automobiles on January 29, 1934. A prototype Toyota Type A engine was completed on September 25, 1934, with the company's first prototype sedan, the A1, completed the following May. As Kiichiro had limited experience with automobile production, he initially focused on truck production; the company's first truck, the G1, was completed on August 25, 1935, and debuted on November 21 in Tokyo, becoming the company's first production model.Modeled on a period Ford truck, the G1 sold for ¥2,900, ¥200 cheaper than the Ford truck. A total of 379 G1 trucks were ultimately produced</p>

                    <p>In April 1936, Toyoda's first passenger car, the Model AA, was completed. The sales price was ¥3,350, ¥400 cheaper than Ford or GM cars.The company's plant at Kariya was completed in May. In July, the company filled its first export order, with four G1 trucks exported to northeastern China. On September 19, 1936, the Japanese imperial government officially designated Toyota Automatic Loom Works as an automotive manufacturer</p>

                    <p>Vehicles were originally sold under the name "Toyoda" (トヨダ), from the family name of the company's founder, Kiichirō Toyoda. In September 1936, the company ran a public competition to design a new logo. Of 27,000 entries, the winning entry was the three Japanese katakana letters for "Toyoda" in a circle. However, Rizaburo Toyoda, who had married into the family and was not born with that name, preferred "Toyota" (トヨタ) because it took eight brush strokes (a lucky number) to write in Japanese, was visually simpler (leaving off the diacritic at the end), and with a voiceless consonant instead of a voiced one (voiced consonants are considered to have a "murky" or "muddy" sound compared to voiceless consonants, which are "clear")</p>

                    <p>The Japanese government supported the company by preventing foreign competitors Ford and General Motors from importing automobiles into Japan</p>

                    <p>At the onset of World War II, Toyota almost exclusively produced standard-sized trucks for the Japanese Army, which paid one-fifth of the price in advance and the remainder in cash upon delivery</p>
                    {/* 1940 */}
                    <b>1940s</b>

                    <p>Japan was heavily damaged in World War II and Toyota's plants, which were used for the war effort, were not spared. On August 14, 1945, one day before the surrender of Japan, Toyota's Koromo Plant was bombed by the Allied forces. After the surrender, the U.S.-led occupying forces banned passenger car production in Japan. However, automakers like Toyota were allowed to begin building trucks for civilian use, in an effort to rebuild the nation's infrastructure. The U.S. military also contracted with Toyota to repair its vehicles</p>

                    <p>By 1947, there was an emerging global Cold War between the Soviet Union and the U.S., who had been allies in World War II. U.S. priorities shifted (the "Reverse Course") from punishing and reforming Japan to ensuring internal political stability, rebuilding the economy, and, to an extent, remilitarizing Japan. Under these new policies, in 1949, Japanese automakers were allowed to resume passenger car production, but at the same time, a new economic stabilization program to control inflation plunged the automotive industry into a serious shortage of funds, while many truck owners defaulted on their loans.Ultimately, the Bank of Japan, the central bank of the country, bailed out the company, with demands that the company institute reforms</p>

                    <b>1950s</b>

                    <p>As the 1950s began, Toyota emerged from its financial crisis a smaller company, closing factories and laying off workers. At about the same time, the Korean War broke out, and being located so close to the battlefront, the U.S. Army placed an order for 1,000 trucks from Toyota. The order helped to rapidly improve the struggling company's business performance. In 1950, company executives, including Kiichiro's cousin Eiji Toyoda, took a trip to the United States where they trained at the Ford Motor Company and observed the operations of dozens of U.S. manufacturers. The knowledge they gained during the trip, along with what the company learned making looms, gave rise to The Toyota Way (a management philosophy) and the Toyota Production System (a lean manufacturing practice) that transformed the company into a leader in the manufacturing industry</p>

                    <p>Toyota started developing its first full-fledged passenger car, the Toyopet Crown, in January 1952. Prior to the Crown, Toyota had been outsourcing the design and manufacturing of auto bodies, which were then mounted on truck frames made by Toyota.The project was a major test for Toyota, who would need to build bodies and develop a new chassis that would be comfortable, but still stand up to the muddy, slow, unpaved roads common in Japan at the time.The project had been championed for many years by founder Kiichiro Toyoda, who died suddenly on March 27, 1952. The first prototypes were completed in June 1953 and began extensive testing, before the Crown went on sale in August 1955.The car was met with positive reviews from around the world</p>

                    <p>After the introduction of the Crown, Toyota began aggressively expanding into the export market. Toyota began shipping Land Cruiser knock-down kits to Latin America in November 1955, sending complete Land Cruisers to Burma (now Myanmar) and the Philippines in 1956 as part of war reparations provided by the Japanese government,establishing a branch in Thailand in June 1957, and shipping Land Cruisers to Australia in August 1957.Toyota established a production facility in Brazil in 1958, the company's first outside of Japan</p>

                    <p>Toyota entered the United States market in July 1958, attempting to sell the Toyopet Crown. The company faced problems almost immediately, the Crown was a flop in the U.S. with buyers finding it overpriced and underpowered (because it was designed for the bad roads of Japan, not high-speed performance). In response, exports of the Crown to the United States were suspended in December 1960.</p>

                    <p>After Kiichiro's death, his cousin Eiji Toyoda led the company for the two decades. Eiji helped establish the company's first plant independent from the Loom Works plant</p>
                    {/* 1960-1970 */}
                    <b>1960s–1970s</b>

                    <p>At the start of the 1960s, the Japanese economy was booming, a period that came to be known as the Japanese economic miracle. As the economy grew, so did the income of everyday people, who now could afford to purchase a vehicle. At the same time, the Japanese government heavily invested in improving road infrastructure.To take advantage of the moment, Toyota and other automakers started offering affordable economy cars like the Toyota Corolla, which became the world's all-time best-selling automobile.

                        Toyota also found success in the United States in 1965 with the Toyota Corona compact car, which was redesigned specifically for the American market with a more powerful engine. The Corona helped increase U.S. sales of Toyota vehicles to more than 20,000 units in 1966 (a threefold increase) and helped the company become the third-best-selling import brand in the United States by 1967. Toyota's first manufacturing investment in the United States came in 1972 when the company struck a deal with Atlas Fabricators, to produce truck beds in Long Beach, in an effort to avoid the 25% "chicken tax" on imported light trucks. By importing the truck as an incomplete chassis cab (the truck without a bed), the vehicle only faced a 4% tariff. Once in the United States, Atlas would build the truck beds and attach them to the trucks. The partnership was successful and two years later, Toyota purchased Atlas.

                        The energy crisis of the 1970s was a major turning point in the American auto industry. Before the crisis, large and heavy vehicles with powerful but inefficient engines were common. But in the years after, consumers started demanding high-quality and fuel-efficient small cars. Domestic automakers, in the midst of their malaise era, struggled to build these cars profitably, but foreign automakers like Toyota were well positioned. This, along with growing anti-Japanese sentiment, prompted the U.S. Congress to consider import restrictions to protect the domestic auto industry.

                        The 1960s also saw the slight opening of the Japanese auto market to foreign companies. In an effort to strengthen Japan's auto industry ahead of the market opening, Toyota purchased stakes in other Japanese automakers. That included a stake in Hino Motors, a manufacturer of large commercial trucks, buses and diesel engines, along with a 16.8 percent stake in Daihatsu, a manufacturer of kei cars, the smallest highway-legal passenger vehicles sold in Japan.That began what became a long-standing partnership between Toyota and the two companies. As part of the partnership, Daihatsu would supply kei cars for Toyota to sell and to a lesser extent Toyota would supply full-sized cars for Daihatsu to sell (a process known as rebadging), allowing both companies to sell a full line-up of vehicles.</p>
                    {/* 1980 */}
                    <b>1980s</b>
                    <p>After the successes of the 1970s, and the threats of import restrictions, Toyota started making additional investments in the North American market in the 1980s. In 1981, Japan agreed to voluntary export restraints, which limited the number of vehicles the nation would send to the United States each year, leading Toyota to establish assembly plants in North America. The U.S. government also closed the loophole that allowed Toyota to pay lower taxes by building truck beds in America.

                        Also in 1981, Eiji Toyoda stepped down as president and assumed the title of chairman. He was succeeded as president by Shoichiro Toyoda, the son of the company's founder.Within months, Shoichiro started to merge Toyota's sales and production organizations, and in 1982 the combined companies became the Toyota Motor Corporation. The two groups were described as "oil and water" and it took years of leadership from Shoichiro to successfully combine them into one organization.

                        Efforts to open a Toyota assembly plant in the United States started in 1980, with the company proposing a joint-venture with the Ford Motor Company. Those talks broke down in July 1981. Eventually in 1984, the company struck a deal with General Motors (GM) to establish a joint-venture vehicle manufacturing plant called NUMMI (New United Motor Manufacturing, Inc.) in Fremont, California. GM saw the joint venture as a way to get access to a quality small car and an opportunity to learn about The Toyota Way and the Toyota Production System. For Toyota, the factory gave the company its first manufacturing base in North America allowing it to avoid any future tariffs on imported vehicles and saw GM as a partner who could show them how to navigate the American labor environment. The plant would be led by Tatsuro Toyoda, the younger brother of company president Shoichiro Toyoda.The first Toyota assembled in America, a white Corolla, rolled off the line at NUMMI on October 7, 1986.
                        Toyota received its first Japanese Quality Control Award at the start of the 1980s and began participating in a wide variety of motorsports. Conservative Toyota held on to rear-wheel-drive designs for longer than most; while a clear first in overall production they were only third in production of front-wheel-drive cars in 1983, behind Nissan and Honda. In part due to this, Nissan's Sunny managed to squeeze by the Corolla in numbers built that year
                        Before the decade was out, Toyota introduced Lexus, a new division that was formed to market and service luxury vehicles in international markets. Prior to the debut of Lexus, Toyota's two existing flagship models, the Crown and Century, both catered exclusively for the Japanese market and had little global appeal that could compete with international luxury brands such as Mercedes-Benz, BMW and Jaguar. The company had been developing the brand and vehicles in secret since August 1983, at a cost of over US$1 billion.The LS 400 flagship full-size sedan debuted in 1989 to strong sales, and was largely responsible for the successful launch of the Lexus marque</p>
                    {/* 1990 */}
                    <b>1990s</b>
                    <p>In the 1990s, Toyota began to branch out from producing mostly compact cars by adding many larger and more luxurious vehicles to its lineup, including a full-sized pickup, the T100 (and later the Tundra), several lines of SUVs, a sport version of the Camry, known as the Camry Solara. They would also launch newer iterations of their sports cars, namely the MR2, Celica, and Supra during this era.

                        December 1997 saw the introduction of the first-generation Toyota Prius, the first mass-produced gasoline-electric hybrid car.The vehicle would be produced exclusively for the Japanese market for the first two years.

                        With a major presence in Europe, due to the success of Toyota Team Europe in motorsport, the corporation decided to set up Toyota Motor Europe Marketing and Engineering, TMME, to help market vehicles in the continent. Two years later, Toyota set up a base in the United Kingdom, TMUK, as the company's cars had become very popular among British drivers. Bases in Indiana, Virginia, and Tianjin were also set up.

                        Toyota also increased its ownership of Daihatsu during this period. In 1995, Toyota increased its shareholding in the company to 33.4 percent, giving Toyota the ability to veto shareholder resolutions at the annual meeting.In 1998, Toyota increased its holding in the company to 51.2 percent, becoming the majority shareholder.

                        On September 29, 1999, the company decided to list itself on the New York and London Stock Exchanges.

                        The later half of the 1990s would also see the Toyoda brothers step back from the company their father had founded. In 1992, Shoichiro Toyoda would shift to become chairman, allowing his brother Tatsuro to become president, a job he held until his retirement in 1995. Shoichiro would step down as chairman in 1999. Both would retain honorary advisory roles in the company. Hiroshi Okuda would lead the company as president from 1995 until 1999 when he became chairman and the President's office would be filled by Fujio Cho</p>

                    {/* 2000 */}
                    <b>2000s</b>
                    <p>In August 2000, exports began of the Prius. In 2001, Toyota acquired its long time partner, truck and bus manufacturer Hino Motors. In 2002, Toyota entered Formula One competition and established a manufacturing joint venture in France with French automakers Citroën and Peugeot. A youth-oriented marque for North America, Scion, was introduced in 2003. Toyota ranked eighth on Forbes 2000 list of the world's leading companies for the year 2005. Also in 2005, Fujio Cho would shift to become chairman of Toyota and would be replaced as president by Katsuaki Watanabe.

                        In 2007, Toyota released an update of its full-sized truck, the Tundra, produced in two American factories, one in Texas and one in Indiana. Motor Trend named the 2007 Toyota Camry "Car of the Year" for 2007. It also began the construction of two new factories, one in Woodstock, Ontario, Canada, and the other in Blue Springs, Mississippi, USA.

                        The company was number one in global automobile sales for the first quarter of 2008.

                        Toyota was hit by the global financial crisis of 2008 as it was forced in December 2008 to forecast its first annual loss in 70 years. In January 2009, it announced the closure of all of its Japanese plants for 11 days to reduce output and stocks of unsold vehicles.

                        In October 2009, Toyota announced that they were establishing an office in South Korea and launched the Camry sedan, Camry hybrid, Prius and the RAV4 during the launching event at the Grand Hyatt Seoul.

                        Between 2009 and 2011, Toyota conducted recalls of millions of vehicles after reports that several drivers experienced unintended acceleration. The recalls were to prevent a front driver's side floor mat from sliding into the foot pedal well, causing the pedals to become trapped and to correct the possible mechanical sticking of the accelerator pedal. At least 37 were killed in crashes allegedly related to unintended acceleration, approximately 9 million cars and trucks were recalled, Toyota was sued for personal injuries and wrongful deaths, paid US$1 billion to settle a class action lawsuit to compensate owners for lost resale value, and paid a US$1.2 billion criminal penalty to the United States government over accusations that it had intentionally hid information about safety defects and had made deceptive statements to protect its brand image
                        Amid the unintended acceleration scandal, Katsuaki Watanabe stepped down as company president. He was replaced by Akio Toyoda, grandson of company founder Kiichiro Toyoda, on June 23, 2009. Akio had been with Toyota since 1984, working jobs in production, marketing and product development, and took a seat on the board of directors in 2000.Akio's promotion by the board marked the return of a member of the Toyoda family to the top leadership role for the first time since 1999</p>

                    {/* 2010s */}
                    <b>2010s</b>
                    <p>In 2011, Toyota, along with large parts of the Japanese automotive industry, suffered from a series of natural disasters. The 2011 Tōhoku earthquake and tsunami led to a severe disruption of the supplier base and a drop in production and exports. Severe flooding during the 2011 monsoon season in Thailand affected Japanese automakers that had chosen Thailand as a production base. Toyota is estimated to have lost production of 150,000 units to the tsunami and production of 240,000 units to the floods.

                        On February 10, 2014, it was announced that Toyota would cease manufacturing vehicles and engines in Australia by the end of 2017.The decision was based on the unfavourable Australian dollar making exports not viable, the high cost of local manufacture, and the high amount of competition in a relatively small local market. The company planned to consolidate its corporate functions in Melbourne by the end of 2017, and retain its Altona plant for other functions. The workforce is expected to be reduced from 3,900 to 1,300.Both Ford Motor Company and General Motors (Holden) followed suit, ending Australian production in 2016 and 2017 respectively.

                        The automaker narrowly topped global sales for the first half of 2014, selling 5.1 million vehicles in the six months ending June 30, 2014, an increase of 3.8% on the same period the previous year. Volkswagen AG, which recorded sales of 5.07 million vehicles, was close behind.

                        In August 2014, Toyota announced it would be cutting its spare-parts prices in China by up to 35%. The company admitted the move was in response to a probe foreshadowed earlier in the month by China's National Development and Reform Commission of Toyota's Lexus spare-parts policies, as part of an industry-wide investigation into what the Chinese regulator considers exorbitantly high prices being charged by automakers for spare parts and after-sales servicing.

                        In November 2015, the company announced that it would invest US$1 billion over the next 5 years into artificial intelligence and robotics research. In 2016, Toyota invested in Uber. In 2020, a corporate governance report showed that Toyota owns 10.25 million shares of Uber, which was valued at $292.46 million as of March 30, 2020. According to Reuters, this was roughly 0.6 per cent of Uber's outstanding shares.

                        In March 2016, Toyota partnered with Yanmar to create a fiberglass pleasure boat using Yanmar outboard marine diesel engines or Toyota inboard engines.

                        In August 2016, the company purchased all remaining assets of Daihatsu, making the manufacturer of small cars a wholly owned subsidiary of Toyota.

                        On August 27, 2018, Toyota announced an investment of US$500 million in Uber's autonomous cars.

                        In October 2019, Toyota backed the Trump Administration's proposal that federal authority should override California's ability to set its own emissions standards for automobiles. The proposal would reduce California's 2025 fuel efficiency standard from about 54.5 to 37 MPG. This shift by Toyota away from fuel efficiency damaged the company's reputation as a green brand</p>

                    {/* 2020 */}
                    <b>2020s</b>
                    <p>By 2020, Toyota reclaimed its position as the largest automaker in the world, surpassing Volkswagen. It sold 9.528 million vehicles globally despite an 11.3% drop in sales due to the COVID-19 pandemic. This includes subsidiaries Daihatsu and Hino Motors.

                        On April 2, 2020, BYD and Toyota announced a new joint venture between the two companies called BYD Toyota EV Technology Co., Ltd., with the aim of "developing BEVs (Battery Electric Vehicles) that appeal to customers."

                        In March 2021, Toyota, its subsidiary Hino, and Isuzu announced the creation of a strategic partnership between the three companies. Toyota acquired a 4.6% stake in Isuzu while the latter plans to acquire Toyota shares for an equivalent value. The three companies said they would form a new joint venture by April called Commercial Japan Partnership Technologies Corporation with the aim of developing fuel cell and electric light trucks. Toyota would own an 80% stake in the venture while Hino and Isuzu would own 10% each.

                        In April 2021, Toyota said that it will buy Lyft's self-driving technology unit for $550 million and merge it with its newly created Woven Planet Holdings automation division.

                        In June 2021, the company defended its donations to the United States Republican lawmakers after they voted against certifying the results of the 2020 presidential election, saying it did not believe it was "appropriate to judge members of Congress" for that one vote. A report by Axios found that Toyota was the top donor to 2020 election objectors, by a substantial margin. The company then reversed course in July 2021 and ceased donations to election objectors, releasing a statement saying it understood that its PAC's donations to those objectors, which far outpaced those of any other company, "troubled some stakeholders." Toyota resumed donations after a six-month pause.

                        In December 2021, Toyota announced that it would invest ¥8,000,000,000,000 ($70 billion at 2021 exchange rate) in electric vehicles by 2030, launch 30 EV models worldwide by that year, and set a sales target of 3.5 million electric vehicles in 2030.

                        Toyota will increase its software engineer intake to around 40% to 50% of all technical hires from the second quarter of 2022, the move plans to address a transformation to so-called CASE — connected, autonomous, shared and electric — technologies in an environment of intensifying global competition.

                        In 2021, Toyota told some of its suppliers to increase their semiconductor inventory levels from the conventional three months to five months in response to the COVID-19 chip shortage. The "just-in-time" supply chain in which parts are only delivered when necessary, had already been revised after the March 11, 2011, earthquake and tsunami in Japan, lifting inventories across the entire procurement network. The time it takes Toyota to turn over its inventory increased by around 40% during the past ten years, to 36.36 days as of March 2021.

                        In June 2022, Toyota recalled 2,700 of its first mass-produced all-electric vehicles due to worries that their wheels could fall off during driving. It was discovered that the bolts on the bZ4X's wheels could loosen up to the point where the wheel simply detaches from the car, causing a loss of control over the vehicle and possible accident.

                        In August 2022, Toyota pledged up to $5.6 billion towards production of electric vehicle battery production and announced an increase in investment in its plant near Greensboro, North Carolina. Also in 2022, Toyota managed to maintain its position as the world's best-selling automaker for the third year in a row.

                        In January 2023, Toyota CEO and President Akio Toyoda announced that he was stepping down and passing the position on to Koji Sato. Akio is the great-grandson of company founder Rizaburo Toyoda. Sato had previously run Lexus, Toyota's luxury car brand. The change is set to take effect on April 1, 2023</p>


                    <h3>Events</h3>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_Toyota;