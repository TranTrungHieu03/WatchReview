const Forbiden = () => {
    return (
        <div
            className='flex justify-center items-center text-center bg-gray-100  flex-1 h-full w-full'
            style={{
                height: "100vh"
            }}
        >
            <div className='text-wrapper text-center mx-20 justify-center'>
                <div className='text-6xl font-black p-4' data-content='404'>
                    403 - ACCESS DENIED
                </div>

                <div className='text-left font-extrabold text-4xl p-2'>
                    Oops, You don't have permission to access this page.
                </div>
                <div className='isi text-left font-light text-lg'>
                    A web server may return a 403 Forbidden HTTP status code in response to a request from a client for
                    a web page or resource to indicate that the server can be reached and understood the request, but
                    refuses to take any further action. Status code 403 responses are the result of the web server being
                    configured to deny access, for some reason, to the requested resource by the client.
                </div>

                <div className='buttons font-black  '>
                    <a className='button  bg-gray-900 text-white px-3 py-2 ' href='/watch'>
                        Go to watch page
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Forbiden
