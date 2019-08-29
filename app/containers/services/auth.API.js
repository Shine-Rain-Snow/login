
export default function register(user) {
        const request = new Request('http://localhost:3000/api/register',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        });
    return function(dispathc){
        return fetch(request).
        then(
            response => {
                console.log(response);
            }
        ).catch(
            error => {
                return error;
            }
        )
    }    
}
