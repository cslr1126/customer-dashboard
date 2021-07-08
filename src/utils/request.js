

export function getUsers(isLocal){
    return ( isLocal ? getLocalUsers() :
      Liferay.Util.fetch(
        '/o/headless-admin-user/v1.0/user-accounts',
        {method:'GET'}
    ).then( res=> res.json())) 
}

export function getLocalUsers(){
    return fetch('http://localhost:8080/o/headless-admin-user/v1.0/user-accounts', {
        headers: {'Authorization': 'Basic ' + btoa('test@test.com:test')}
            })
           .then(res => res.json())
           .then(json => console.log(json)) 
}
// Get the Structed IDs for content
export function getStructures(){
    return Liferay.Util.fetch(
        'o/headless-delivery/v1.0/sites/36562/content-structures',
        { method: 'GET'}
    ).then(res = res.json())
}

// Get News Articles 41907 , Site ID 36562
export function getWebContent(){
	return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/content-structures/41907/structured-contents',
		{ method: 'GET'}
	).then(res = res.json())
}

// Get a list of Stuctured content 
// v1.0​/sites​/{siteId}​/content-structures