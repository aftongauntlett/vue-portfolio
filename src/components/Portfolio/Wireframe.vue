<template>
    <b-card class="p-3 m-2 myCard slow" :img-src="imageLocation" :title="wireframe.title">
        <b-card-text>
            {{ wireframe.description }}
            <div class="mt-3">
<!--                <b-button-->
<!--                        class="pButton ml-3 my-2"-->
<!--                        variant="dark"-->
<!--                        :href="wireframe.deployedLink"-->
<!--                        target="_blank"-->
<!--                >GitHub</b-button>-->
                <b-button
                        class="pButton ml-3 my-2"
                        variant="dark"
                        :href="wireframe.gitLink"
                        target="_blank"
                >View Wireframe</b-button>
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
    export default {
        name: "Wireframe",
        props: {
            wireframe: {}
        },
        computed: {
            imageLocation() {
                return require("../../assets/images/projects/" + this.wireframe.image);
            }
        }
    };
</script>

<style scoped>
    .myCard {
        max-width: 30rem;
    }

    .content {
        flex: 1 0 auto;
    }

    .slow {
        animation: slow 0.5s ease forwards;
    }

    .pCards:hover {
        opacity: 1;
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }

    .pButton:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }

    .slow {
        animation: slow 0.5s ease forwards;
    }

    @keyframes slow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
