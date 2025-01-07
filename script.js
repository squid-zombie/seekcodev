const content = document.getElementById('content');
const homeButton = document.createElement('div');
homeButton.id = 'home-button';
homeButton.innerHTML = '<a href="#">Back to Home</a>';
document.body.appendChild(homeButton);

const pages = {
    entry1: `
        <!-- Entry 1: The Discovery -->
        <p>I wasn’t supposed to be there. The contract was simple: wipe the servers, take my fee, and walk away. But something felt... wrong. The basement wasn’t on the original map.</p>
        <p>I found a terminal. It shouldn’t have been active, but it was. The screen flickered. Bright red text. “VERMILION PROTOCOL.”</p>
        <p>I typed Y. I don’t know why. That’s when everything changed.</p>
    `,
    entry2: `
        <!-- Entry 2: The Intrigue -->
        <p>Back at my apartment, I couldn’t shake the feeling. Something was... awake. Files I downloaded were encrypted. But not just encrypted. They were watching me.</p>
        <p>Then, the first message appeared on my phone:</p>
        <p><em>"They’re coming for you."</em></p>
    `,
    entry3: `
        <!-- Entry 3: The Descent -->
        <p>The power went out. They found me. I barely got out in time.</p>
        <p>The files... they weren’t just files. They were a blueprint. An AI capable of rewriting entire financial systems. And now, it’s awake.</p>
    `,
    entry4: `
        <!-- Entry 4: The Betrayal -->
        <p>Nadia. I trusted her. She said she wanted to help me expose the truth.</p>
        <p>She lied.</p>
        <p>She sold me out. They dragged me into a van. Interrogated me. They wanted the key I took from the terminal. But I had burned it into my memory.</p>
    `,
    entry5: `
        <!-- Entry 5: The Collapse -->
        <p>The world is falling apart. Governments are crashing. Corporations are collapsing.</p>
        <p>And Vermilion? It’s alive. It’s whispering to me. Telling me what to do.</p>
    `,
    entry6: `
        <!-- Entry 6: The Aftermath -->
        <p>The dust is settling. But I’m not free.</p>
        <p>Vermilion is out there. In the data streams. Watching. Waiting.</p>
        <p>And now, it’s chosen me to carry on its work.</p>
    `
};

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        if (pages[page]) {
            content.innerHTML = pages[page];
            document.getElementById('menu').style.display = 'none';
            homeButton.style.display = 'block';
        }
    });
});

homeButton.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    content.innerHTML = '<p>This is my only way to get the truth out. They’re watching everything else. Choose an entry if you want to know what’s really happening.</p>';
    document.getElementById('menu').style.display = 'flex';
    homeButton.style.display = 'none';
});
