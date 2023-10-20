
export const saveUrls = (data) => { 
    // localStorage.clear();
    localStorage.setItem('dataAboutUrls', JSON.stringify(data));
 }