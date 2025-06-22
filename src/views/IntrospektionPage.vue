<script setup>
import { ref } from 'vue';
import { poems } from '../data/introspektion.js';
import ArrowLeft from '../components/icons/ArrowLeftIcon.vue';
import ArrowRight from '../components/icons/ArrowRightIcon.vue';

const prevBtn = ref(null);
const nextBtn = ref(null);
const book = ref(null);
const paper1 = ref(null);
const paper2 = ref(null);
const paper3 = ref(null);
const paper4 = ref(null);

let currentLocation = ref(1);
const numOfPapers = 4;
const maxLocation = numOfPapers + 1;

function openBook() {
	book.value.style.transform = 'translateX(50%)';
	prevBtn.value.style.transform = 'translateX(-180px)';
	nextBtn.value.style.transform = 'translateX(180px)';
}

function closeBook(isAtBeginning) {
	if (isAtBeginning) {
		book.value.style.transform = 'translateX(0%)';
	} else {
		book.value.style.transform = 'translateX(100%)';
	}

	prevBtn.value.style.transform = 'translateX(0px)';
	nextBtn.value.style.transform = 'translateX(0px)';
}

function goNextPage() {
	if (currentLocation.value < maxLocation) {
		switch (currentLocation.value) {
			case 1:
				openBook();
				paper1.value.classList.add('flipped');
				paper1.value.style.zIndex = 1;
				break;
			case 2:
				paper2.value.classList.add('flipped');
				paper2.value.style.zIndex = 2;
				break;
			case 3:
				paper3.value.classList.add('flipped');
				paper3.value.style.zIndex = 3;
				break;
			case 4:
				paper4.value.classList.add('flipped');
				paper4.value.style.zIndex = 4;
				closeBook(false);
				break;
			default:
				throw new Error('unknown state');
		}
		currentLocation.value++;
	}
}

function goPrevPage() {
	if (currentLocation.value > 1) {
		switch (currentLocation.value) {
			case 2:
				closeBook(true);
				paper1.value.classList.remove('flipped');
				paper1.value.style.zIndex = 4;
				break;
			case 3:
				paper2.value.classList.remove('flipped');
				paper2.value.style.zIndex = 3;
				break;
			case 4:
				paper3.value.classList.remove('flipped');
				paper3.value.style.zIndex = 2;
				break;
			case 5:
				openBook();
				paper4.value.classList.remove('flipped');
				paper4.value.style.zIndex = 1;
				break;
			default:
				throw new Error('unknown state');
		}

		currentLocation.value--;
	}
}
</script>

<template>
	<div class="wrapper">
		<h1>
			<span class="accent">Introspektion</span>
		</h1>
		<div class="intro">
			<!-- <img
				src="/src/assets/introspektion_bok.webp"
				alt=""
				class="responsive-img" /> -->
			<div class="text-wrapper">
				<h2>En diktsamling som berör det mänskliga sinnet</h2>
				<p>
					<em>Introspektion</em> är en enastående diktsamling och författaren Sonja Josipovics
					första bok på svenska. Med över hundra tankeväckande dikter tar boken med dig på en resa
					genom livet, känslor och de eviga frågorna om vår plats i världen. Denna samling berör en
					mängd teman – kärlek, kamp, självutforskning och reflektion över tillståndet i vår
					omvärld. Dikterna dyker djupt ner i kontrasten mellan mörker och ljus, och hur dessa
					påverkar våra känslor, vår natur och vårt sätt att vara som människor.
				</p>
				<p>
					Introspektion handlar om oss – vanliga människor och de frågor vi ställer oss genom livet.
					Det är en bok som utforskar de hinder vi möter, både yttre och inre. Ibland är vi segrare,
					ibland inte, men varje steg är en del av vår resa. <br />
					Författaren utforskar de osynliga, mäktiga hinder som vi ofta finner inom oss själva. Vem
					är egentligen vår största fiende? Svaret ligger närmare än vi tror – det speglas i oss
					själva.
				</p>
				<h3>Poesi som förenar psykologi och filosofi</h3>
				<p>
					Författaren kombinerar poesi, psykologi och filosofi för att skapa en djupgående
					läsupplevelse. Genom Introspektion bjuds du in till en resa av självreflektion, där du
					uppmanas att titta inåt och möta både de vackra och de mörka sidorna av det mänskliga
					sinnet.
				</p>
				<p>Ta en djupdykning inuti och se vad du hittar.</p>
			</div>
		</div>
		<div class="divider"></div>
		<div class="review">
			<h3>Andra har sagt:</h3>
			<p>
				Introspektion är en magisk resa in i människans innersta väsen – en diktsamling som både rör
				och skakar om. Med en röst som balanserar mellan det sårbara och det kraftfulla, bjuder
				författaren in läsaren till en förtrolig konversation om livet, dess frågor och de osynliga
				hinder vi alla möter. Varje dikt är som en spegel, där man både ser sig själv och världen på
				nya sätt. Språket är enkelt men samtidigt poetiskt rikt, fyllt av känslor som stannar kvar
				långt efter att sista sidan är vänd. Texterna griper tag om hjärtat, får oss att reflektera
				och erbjuder tröst i sin ärlighet. Här ryms både ljus och mörker, vinst och förlust – allt
				insvept i en vacker melodi av ord. Introspektion är inte bara en bok, det är en upplevelse.
				Det är en påminnelse om vår mänsklighet, om våra styrkor och brister, och om vikten av att
				ibland stanna upp och se inåt. En oemotståndlig samling för alla som älskar litteratur som
				berör och väcker eftertanke. <br />
				Jag rekommenderar den varmt – det här är en diktsamling som förtjänar att bli läst, och
				älskad, om och om igen.
			</p>
			<p>Boken får: 5/5⭐️</p>
			<a href="https://www.instagram.com/p/DEUaVmWOIwV/?img_index=1">@wandersinbookland</a>
		</div>
		<div class="divider"></div>
		<div
			class="quote"
			style="padding-top: 3rem">
			<q>Who looks outside, dreams; who looks inside, awakes.</q>
			<span style="margin-left: 1rem">Carl Jung</span>
		</div>
		<div class="divider"></div>
		<ul class="poems-list">
			<li
				v-for="poem in poems"
				:key="poem.title">
				<h2>
					<span class="accent">{{ poem.title }}</span>
				</h2>
				<p v-html="poem.poem"></p>
			</li>
		</ul>

		<div class="book-wrapper">
			<button
				ref="prevBtn"
				@click="goPrevPage">
				<ArrowLeft />
			</button>
			<div
				ref="book"
				class="book">
				<div
					id="p1"
					ref="paper1"
					class="paper">
					<div class="front">
						<div
							id="f1"
							class="front-content">
							<img
								src="/introspektion.jpg"
								alt="" />
						</div>
					</div>
					<div class="back">
						<div class="back-content"></div>
					</div>
				</div>
				<div
					id="p2"
					ref="paper2"
					class="paper">
					<div class="front">
						<div
							id="f2"
							class="front-content">
							<h2>Dansa</h2>
							<p v-html="poems[0].poem"></p>
						</div>
					</div>
					<div class="back">
						<div class="back-content"></div>
					</div>
				</div>
				<div
					id="p3"
					ref="paper3"
					class="paper">
					<div class="front">
						<div
							id="f3"
							class="front-content">
							<h2>Kärleken vinner</h2>
							<p v-html="poems[1].poem"></p>
						</div>
					</div>
					<div class="back">
						<div class="back-content"></div>
					</div>
				</div>
				<div
					id="p4"
					ref="paper4"
					class="paper">
					<div class="front">
						<div
							id="f4"
							class="front-content">
							<h2>Introspektion</h2>
							<p v-html="poems[2].poem"></p>
						</div>
					</div>
					<div class="back">
						<div
							id="b4"
							class="back-content">
							<p>
								Sonja Josipovic är författare, frilansjournalist och psykolog. Första dikten skrev
								hon när hon bara var sju år gammal och då började hennes resa där papper och penna
								blev en oundviklig del av hennes liv. Hon har skrivit och publicerat allt från
								artiklar i modemagasin, låttexter för olika popartister, dikter, noveller och en
								roman som fick stor uppmärksamhet i hennes hemland. Hennes största inspiration är
								människor och hennes skrivande är en blandning av poesi, psykologi och filosofi.
								Introspektion är hennes första bok på svenska där hon skriver om vanliga människor,
								deras känslor, livet och den oundvikliga - döden.
							</p>
						</div>
					</div>
				</div>
			</div>
			<button
				ref="nextBtn"
				@click="goNextPage">
				<ArrowRight />
			</button>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	max-width: 90svw;
}

.intro {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 2rem;
}

.text-wrapper {
	order: 1;
}
.responsive-img {
	order: 2;
}

.poems-list {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin: 0 auto;
	padding: 2.5rem 0 0 0;
}

.book-wrapper {
	display: none;
}

.book {
	position: relative;
	width: 360px;
	height: 530px;
	transition: transform 0.5s;
}

.paper {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	perspective: 1500px;
}

.front,
.back {
	background-color: white;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	transform-origin: left;
	transition: transform 0.5s;
}

.front {
	z-index: 1;
	backface-visibility: hidden;
	border-left: 3px solid powderblue;

	p {
		margin: 0;
		line-height: 1.2em;
	}
}

.back {
	z-index: 0;
}

.front-content,
.back-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 2rem;
	gap: 0.5rem;

	h2 {
		font-size: 26px;
	}

	p {
		font-size: 18px;
	}
}

#f1 {
	padding: 0;
	img {
		max-height: 100%;
		width: 100%;
	}
}

.back-content {
	transform: rotateY(180deg);
}

.flipped .front,
.flipped .back {
	transform: rotateY(-180deg);
}

#b4 {
	padding-left: 0;
	background-color: #e6cbd8;

	p {
		padding: 1rem;
		color: rgb(26, 26, 26);
		line-height: 1.3em;
		word-spacing: 1px;
	}
}

button {
	border: none;
	background-color: transparent;
	cursor: pointer;
	margin: 10px;
	transition: transform 0.6s;
}

button:focus {
	outline: none;
}

button:hover i {
	color: #636363;
}

/* Paper stack order */
#p1 {
	z-index: 3;
}

#p2 {
	z-index: 2;
}

#p3 {
	z-index: 1;
}

@media (max-width: 650px) {
	.quote {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
}

@media (min-width: 850px) {
	.poems-list {
		display: none;
	}

	.book-wrapper {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		padding-block: 5rem;
		margin-top: 3rem;
		background: rgb(49, 92, 116);
		background: linear-gradient(
			180deg,
			rgba(49, 92, 116, 1) 0%,
			rgba(114, 170, 181, 1) 29%,
			rgba(251, 241, 248, 1) 96%
		);
	}
}
</style>
