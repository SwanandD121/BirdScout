import Sidebar from "./Sidebar"
import brownheadedbarbet from "../assets/birds/brown-headed-barbet.jpg" // Your bird image
import sparrow from "../assets/birds/sparrow.jpg" // Mission section bird image
import teambirds from "../assets/teambirds.jpeg" // Mission section bird image
import arghya from "../assets/team/arghya.jpg" // Team members' profile pictures
import khyaat from "../assets/team/khyaat.jpg"
import tejal from "../assets/team/tejal.jpg"
import sparsh from "../assets/team/sparsh.jpg"
import swanand from "../assets/team/swanand.jpg"
import Button from "./Button"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Welcome Section */}
        <section className="flex flex-col md:flex-row md:h-screen items-center md:justify-between mb-12 p-8 md:p-20">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent font-extrabold">
                BirdScout!
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Identify birds using our cutting-edge ML technology.
            </p>
            <Button
              text="Identify Your Sighting"
              onClick={() =>
                (window.location.href =
                  "https://en.wikipedia.org/wiki/Peregrine_falcon")
              }
            />
          </div>
          <img
            src={brownheadedbarbet}
            alt="Bird"
            className="w-full md:w-1/2 h-60 md:h-80 object-cover rounded-lg shadow-md mt-6 md:mt-0"
          />
        </section>

        {/* Our Mission Section */}
        <section className="flex flex-col md:flex-row items-center p-8 md:p-20 gap-8">
          <img
            src={sparrow}
            alt="Bird"
            className="w-full md:w-1/2 h-120 md:h-4/5 object-cover rounded-lg shadow-md"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              At BirdScout, our mission is to empower wildlife enthusiasts and
              conservationists with the technology to identify, document, and
              protect bird species across the globe.
            </p>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="p-8 md:p-12 flex flex-col items-center mb-12 md:mb-36">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">Our Team</h2>
          <div className="flex flex-col items-center gap-8">
            <img
              src={teambirds}
              alt="Team Birds"
              className="rounded-md w-full md:w-2/3"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {/* Team Members */}
              {[
                {
                  src: arghya,
                  name: "Arghya Banerjee",
                  title: "The Ornithologist",
                },
                { src: khyaat, name: "Khyaat Punetha", title: "Feather Guru" },
                { src: tejal, name: "Tejal Bishnoi", title: "Bird Whisperer" },
                { src: sparsh, name: "Sparsh Rajput", title: "Sky Watcher" },
                {
                  src: swanand,
                  name: "Swanand Deshpande",
                  title: "Wildlife Scout",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 bg-lime-200 p-2 object-cover rounded-full shadow-md mb-4"
                  />
                  <p className="font-bold">{member.name}</p>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Footer */}
      <Footer />
      </div>
    </div>
  )
}

export default Home
