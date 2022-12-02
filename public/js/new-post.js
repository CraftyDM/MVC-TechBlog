//needs work

async function newFormHandler(event) {
    event.preventDefault();
  
    const blog_title = document.querySelector('input:{$blog_title}').value;
    const blog_body = document.querySelector('input:{$blog_body').value;
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        blog_title, blog_body }),
      headers: {'Content-Type': 'application/json'}
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
