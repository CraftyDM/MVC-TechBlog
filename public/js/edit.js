//needs work
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete blog');
        }
    }
};

const updateblog = async (event) => {
    event.preventDefault();

    const blog_title = document.getElementById("blog_title");
    const blog_body = document.getElementById("blog_body");
    const id = blog.getAttribute("blog_Id");

    const response = await fetch(`/dashboard/singleblog/${id}`, {
        method: "PUT",
        body: JSON.stringify({ blog_title, blog_body }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Uh Oh!");
    }
}
deleteBtn.addEventListener("click", deleteblog);
updateForm.addEventListener("submit", updateblog)