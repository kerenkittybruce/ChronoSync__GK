<template>
    <div v-if="user.role === 'admin'">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login History
        </button>

        <!-- Bootstrap Modal By Abdul Abrahams -->

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">User Login History</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <a class="btn btn-primary dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            June 2023
                            </a>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    1 June 2023
                                    <div class="row">
                                        <input class="col-6" value="8: 23 am">
                                        <input class="col-6" value="16:30 pm">
                                    </div>
                                    2 June 2023
                                    <div class="row">
                                        <input class="col-6" value="8: 23 am">
                                        <input class="col-6" value="16:30 pm">
                                    </div>
                                    3 June 2023
                                    <div class="row">
                                        <input class="col-6" value="8: 23 am">
                                        <input class="col-6" value="16:30 pm">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a class="btn btn-primary dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            July 2023
                        </a>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body">
                                1 July 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                2 July 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                3 July 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a class="btn btn-primary dropdown-toggle" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            August 2023
                        </a>
                        <div class="collapse" id="collapseExample3">
                            <div class="card card-body">
                                1 August 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                2 August 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                                3 August 2023
                                <div class="row">
                                    <input class="col-6" value="8: 23 am">
                                    <input class="col-6" value="16:30 pm">
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryModal',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>