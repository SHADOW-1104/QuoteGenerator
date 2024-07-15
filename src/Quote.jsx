import { useState } from "react"

const quoteData = [
    {
        text: `"Quiero comprender el significado de 'Te Amo', eso es todo."`,
        author: "Violet Evergarden"
    },
    {
        text: `"Vivan con el orgullo y la frente en alto y no permitas que tus miedos y debilidades te alejen de tus objetivos, mantén tu corazón ardiendo."`,
        author: "Rengoku Kyojuro"
    },
    { text: `"No podemos ganar sin pelear."`, author: "Eren Jeager" },
    {
        text: `"Mientras el enemigo permanezca al frente yo seguiré peleando."`,
        author: "Vegeta"
    },
    {
        text: `"Yo no veo nada de malo en hacer todo lo posible para hacer feliz a los que mas."`,
        author: "Tohru"
    },
    {
        text: `"Tenemos un numero limitado de comidas en esta vida, por eso debemos disfrutar cada una."`,
        author: "Chisato Nishikigi"
    },
    {
        text: `“En la guerra, no hay ganadores, solo sobrevivientes.”`,
        author: "Vladilena Milizé"
    },
    {
        text: `"Todos cometen errores. Sólo debes esforzarte en no cometerlos de nuevo."`,
        author: "Ainz Ooal Gown"
    },
    {
        text: `“Si hay algo que quieres, tienes que hacer todo lo posible para reclamarlo por ti mismo. La vida es más divertida de esa manera.”`,
        author: "Mizuhara Chizuru"
    },
    {
        text: `"Nos encontramos por casualidad y nos atrajimos por naturaleza."`,
        author: "Zero Two"
    },
    {
        text: `"Frieren, así como los demonios engañan con palabras, usa tu poder para engañar a los demonios."
  
  `,
        author: "Flamme"
    },
    {
        text: `"Un humano impulsado por el odio seguirá peleando sin importarle el bienestar propio, ajeno o cualquier otra razón."`,
        author: "Tanya von Degurechaff"
    },
    {
        text: `" Los milagros son alucinaciones provocadas por la ignorancia. No son... mas que un lindo error."`,
        author: "Tanya von Degurechaff"
    },
    {
        text: `"Es mejor reinar en el infierno que servir en el cielo."`,
        author: "Dominus Tenebris"
    },
    {
        text: `"Oh poderoso señor oscuro, por quien todo veo arder a mi alrededor, que mi deseo sea tu voluntad y mi camino sea tu poder, así en la tierra como en el infierno."`,
        author: "Sabrina Spellman"
    }
];

const QuoteBox = ({ quote, handleNewQuote }) => (
    <div id="quote-box" className="quoteBox">
        <p id="text">
            <strong>{quote.text}</strong>
        </p>
        <h2 id="author">- {quote.author}</h2>
        <div className="actions">
            <button type="button" id="new-quote" className="button" onClick={handleNewQuote}>Otra Frase</button>
        </div>
    </div>
);

const getRandomIndex = () => Math.floor(Math.random() * quoteData.length);

export const Quote = () => {
    const [quote, setQuote] = useState(quoteData[getRandomIndex()]);
    const handleNewQuote = () => {
        setQuote(quoteData[getRandomIndex()]);
    };
    return (

        <div className="box">


            <div className="main">
                <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
            </div>
        </div>

    )
}
