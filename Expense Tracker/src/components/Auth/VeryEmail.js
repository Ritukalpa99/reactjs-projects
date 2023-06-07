
const VerifyEmail = () => {
    const handleVerify = async () => {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;
		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
                    requestType : "VERIFY_EMAIL",
					idToken: localStorage.getItem("token"),
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(res);
			const data = await res.json();
			console.log(data);

			if (!res.ok) {
				const errorMessage = data.error.message;
				throw new Error(errorMessage);
			} else {
                alert('Check your email');
            }
			

		} catch (err) {
			alert(err.message);
		}
    }
    return <form onSubmit={handleVerify}>
        <button type="submit" className="btn btn-outline-success">Verify Email</button>
    </form>
}

export default VerifyEmail;