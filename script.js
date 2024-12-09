// script.js
const creatures = [
    {id: "Unicorn", frontImage: "Images/First/Unicorn.jpg", backImage: "Images/Second/Unicorn2.jpg"},
    {id: "Mermaid", frontImage: "Images/First/Mermaid.jpg", backImage: "Images/Second/Mermaid2.jpg"},
    {id: "Dragon", frontImage: "Images/First/Dragon.jpg", backImage: "Images/Second/Dragon2.jpg"},
    {id: "Pheonix", frontImage: "Images/First/Pheonix.jpg", backImage: "Images/Second/Pheonix2.jpg"},
    {id: "Fairy", frontImage: "Images/First/Fairy.jpg", backImage: "Images/Second/Fairy2.jpg"},
    {id: "Werewolf", frontImage: "Images/First/Werewolf.jpg", backImage: "Images/Second/Werewolf2.jpg"},
    {id: "Gnome", frontImage: "Images/First/Gnome.jpg", backImage: "Images/Second/Gnome2.jpg"}
];

creatures.forEach(creature => {
    const imgElement = document.getElementById(creature.id);

    imgElement.addEventListener('mouseover', () => {
        imgElement.src = creature.backImage;
    });

    imgElement.addEventListener('mouseout', () => {
        imgElement.src = creature.frontImage;
    });
});
