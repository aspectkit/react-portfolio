export default function Projects(){
    return (
        <div className="flex justify-evenly px-10 bg-slate-600 w-screen">
        <div class="max-w-sm rounded bg-white shadow-lg ">
            <a href="https://jasondeline.github.io/pawesome-fact-finder/" target="_blank" rel="noreferrer">
                <img class="w-full" src="./pawsome.png" alt="pawsome website" />
            </a>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Pawsome Fact Finder</div>
            <p class="text-gray-700 text-base">
                A website that allows you to look at pictures of pets and learn some facts about them along the way!
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
        </div>
    </div>

    <div class="max-w-sm rounded bg-white shadow-lg ">
            <a href="https://game-tracker-p2.herokuapp.com/" target="_blank" rel="noreferrer">
                <img class="w-full" src="./levelup.png" alt="levelup website" />
            </a>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">LevelUp</div>
            <p class="text-gray-700 text-base">
                A website where you can keep a log of all the games you have played and learn more information about them. You can also find new games to try play!
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQL</span>
        </div>
    </div>

    <div class="max-w-sm rounded bg-white shadow-lg ">
            <a href="#" target="_blank" rel="noreferrer">
                {/* <img class="w-full" src="#" alt="pawsome website" /> */}
            </a>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Project 3 - TBD</div>
            <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#GraphQL</span>
        </div>
    </div>
</div>
    )
}