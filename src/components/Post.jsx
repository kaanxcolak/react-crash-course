const names = ['Kaan','Colak'];

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
<div>
    <p>{chosenName}</p>
    <p>ReactJS is a super!</p>
</div>
    );
}

export default Post;