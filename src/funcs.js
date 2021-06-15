import {useHistory} from 'react-router'

const DelF = (blog_id) => {
    let history = useHistory();

    console.log(blog_id);

    fetch('http://localhost:8000/blogs', {
        method: 'DELETE',
    }).then(ret => {
        history.push('/')
    })
}

let ojemba = {DelF};
 
export default ojemba;