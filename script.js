const rejections = [
    {
        text: "Thank you for your patience and sorry to keep you waiting. Unfortunately we decided to make an offer to another candidate and that individual has accepted this morning.",
        background: "https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        text: "We have a huge admiration for your work - ultimately, however, after a lot of thinking and reflection as a team, it wasn’t feeling like the ideal fit for us, and for the needs of our business right now.",
        background: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        text: "We have received many qualified applicants and have decided to move ahead with candidates who we feel are a better match for this particular position.",
        background: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3264&q=80"
    },
    {
        text: "We are receiving many qualified applicants who are a strong match for this particular position, and thus are moving them forward at this time.",
        background: "https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        text: "We encourage you to visit our career site regularly and apply to other opportunities of interest.",
        background: "https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80"
    },
    {
        text: "We’ve decided to move forward with other candidates for this role, but I want you to know that I genuinely enjoyed talking to you.",
        background: "https://images.unsplash.com/photo-1517685704588-0935ac847be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80"
    },
    {
        text: "We understand that there are a lot of great companies that are hiring to choose from. After reviewing your experiences and skills, we have selected other candidates that are an ideal match for this position to move forward within the interview process.",
        background: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
    },
    {
        text: "We regret to inform you that weve hired another applicant.",
        background: "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
    },
    {
        text: "Unfortunately, at this time, your experiences are not a match for the role we are hiring for.",
        background: "https://images.unsplash.com/photo-1517054612019-1bf855127c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3297&q=80"
    },
    {
        text: "After much consideration weve decided not to move forward at this time.",
        background: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    },
    {
        text: "Upon reviewing the pool of talented individuals that have applied for this role, we have decided to move forward with other candidates at this time.",
        background: "https://images.unsplash.com/photo-1516687401797-25297ff1462c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        text: "I wanted to let you know that our Web Developer opportunity is currently on hold. We are currently re-evaluating the perimeters of the role. I will reach out to you and update you when we have determined the new perimeters.",
        background: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80"
    }
]

const button = document.getElementById('generatorButton');
console.log(button);


button.addEventListener('click', function(){

    document.getElementById('results').innerHTML = '';

    const randomQuote = rejections.sort(() => Math.random() - 0.5);

    const slicedQuote = randomQuote.slice(0,1);

    const displayRejection = document.getElementById('results');

    const quote = document.createElement('p');

    quote.innerHTML = slicedQuote[0].text;
    displayRejection.setAttribute("style", "height: 60vh", "background-repeat: no-repeat"); 
    displayRejection.style.backgroundImage = "url('" + slicedQuote[0].background + "')";

    displayRejection.appendChild(quote);
    document.getElementById('results').scrollIntoView({behavior: 'smooth'})

})