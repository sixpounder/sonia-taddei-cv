<template>
    <header aria-labelledby="title">
        <img src="@/assets/face.jpeg" />
        <h1 id="title">
            Sonia Taddei
            <h2>Aerospace & Aerodynamic Engineer<br>PhD in Experimental Aerodynamics</h2>
        </h1>
    </header>
</template>

<style scoped>
header {
    @apply text-6xl p-16;
    @apply flex flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-14;
}
header img {
    @apply mb-4 lg:mb-0 rounded-full border-2 border-slate-900 shadow-gray-400 dark:border-slate-500 dark:shadow-slate-400;
}

header h1 {
    @apply text-center lg:text-left font-bold dark:text-slate-200;
}

header h1 h2 {
    @apply text-lg lg:text-2xl font-light text-slate-600 dark:text-slate-400 mt-3;
}
</style>