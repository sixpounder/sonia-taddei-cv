<template>
    <header aria-labelledby="title">
        <img src="../../assets/face.jpeg" />
        <div role="presentation" id="title-subtitle-wrap">
            <h1 id="title">
                Sonia Taddei
            </h1>
            <h2>Aerospace & Aerodynamic Engineer<br>PhD in Experimental Aerodynamics</h2>
        </div>
    </header>
</template>

<style scoped>
header {
    @apply text-6xl p-16;
    @apply flex flex-col lg:flex-row lg:flex-nowrap justify-center items-center lg:space-x-14;
}
header img {
    @apply mb-4 lg:mb-0 rounded-full border-2 border-slate-900 shadow-gray-400 dark:border-slate-500 dark:shadow-slate-400;
}

header #title-subtitle-wrap {
    @apply flex flex-col;
}

header h1 {
    @apply text-center lg:text-left font-bold dark:text-slate-200;
}

header h2 {
    @apply text-center lg:text-left text-xl lg:text-2xl font-light text-slate-600 dark:text-slate-400 mt-3;
}
</style>