import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, truncateWithEllipsis } from "../api/utils";
import { useSubmitWorkAction } from "../api/submitWork";
import FileUploader from "../components/uploadImage";

const SubmitWork = () => {
  const navigate = useNavigate();
  const { is, submitted, submitWork } = useSubmitWorkAction();
  // const { user, authenticated } = useContext(UserContext);

  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [hash, setHash] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    title: "",
    email: "",
    walletAddress: "",
    description: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidate = useCallback(() => {
    const { title, email, walletAddress, description } = values;
    if (
      title &&
      email &&
      walletAddress &&
      description &&
      firstname &&
      lastname &&
      fileUrl !== ""
    ) {
      return true;
    }
    return false;
  }, [fileUrl, values]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (!handleValidate()) return;

      const user = await authenticate({
        signingMessage: "Verify wallet address to submit your work",
      });

      if (user) {
        if (user.attributes.address !== walletAddress) return;
        const { title, email, walletAddress, description } = values;

        const work = {
          title,
          email,
          walletAddress,
          description,
          fileUrl,
          creatorName: name,
        };

        const response = await submitWork(work);
        if (response) {
          setSuccess("Work submitted successfully");
          setTimeout(() => {
            setSuccess(null);
            // navigate(`/`);
          }, 5000);
        }
      } else {
        setError("Wallet authentication failed.");
        setTimeout(() => setError(null), 5000);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => setError(null), 5000);
    }

    setSubmitting(false);
  };

  // useEffect(() => {
  //   if (createTRibError) setError(createTRibError.message);
  //   if (submitted && createTRibHash) setHash(createTRibHash);
  // }, [isCreating, submitted, createTRibHash, createTRibError]);

  return (
    <div className="mt-10 sm:mt-0">
      {console.log(values, fileUrl, handleValidate())}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Artwork Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Qualifying artworks will be minted on the Polygon.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="artist"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stage name (Pseudonym)*
                    </label>
                    <input
                      type="text"
                      name="artist"
                      id="artist"
                      autoComplete="artist"
                      value={values.artist}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="walletAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Wallet address (Winnings will be sent here)*
                    </label>
                    <input
                      type="text"
                      name="walletAddress"
                      id="walletAddress"
                      autoComplete="walletAddress"
                      value={values.walletAddress}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      autoComplete="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      autoComplete="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Artwork Title*
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="given-name"
                      value={values.title}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address*
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About this Artwork*
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="focus:outline-none px-2 py-2 shadow-sm focus:ring-gold focus:border-gold mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder=""
                        value={values.description}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your Artwork.
                    </p>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="artworkNftName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Artwork*
                    </label>
                    <FileUploader fileUrl={fileUrl} setFileUrl={setFileUrl} />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                <button
                  type="submit"
                  className={`${
                    handleValidate() ? "" : "opacity-30"
                  } inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gold hover:bg-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold`}
                  onClick={handleSubmit}
                  disabled={!handleValidate()}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                {(success || error || hash) && (
                  <>
                    <p
                      className={`${
                        error ? "" : "hidden"
                      }text-center text-sm text-red-500 mt-2`}
                    >
                      {error}
                    </p>
                    <p
                      className={`${
                        success ? "" : "hidden"
                      }text-center text-sm text-green-500 mt-2`}
                    >
                      {success}
                    </p>
                    <a
                      href={`https://polygonscan.com/tx/${hash}`}
                      className={`${
                        hash ? "" : "hidden"
                      }text-center text-sm text-gold mt-2`}
                    >
                      {truncateWithEllipsis(
                        `https://polygonscan.com/tx/${hash}`,
                        26
                      )}
                    </a>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitWork;
