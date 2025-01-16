<script setup>
// import AppHeaderBasic from '@/components/common/AppHeaderBasic.vue';
import FrontPageLayout from '@/components/common/FrontPageLayout.vue';
import router from '@/router';
const routeTo = (name)=>{
    router.push({name: name})
}
</script>

<template>
    <FrontPageLayout>
        <section class="portal-banner">
            <div class="">
                <div class="flx">
                    <div class="welcome-text">
                        <div class="">
                            <h2 class="title">Welcome To Support Portal</h2>
                            <p>You are in right place if you have got any issues or need a dedicated support.</p>
                        </div>
                    </div>
                    <div class="welcome-img">
                        <img src="../../assets/images/support.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <section class="section">
                <div class="row portal-intro bg-white wrap" style="align-items: center;">
                    <div class="col-sm-12 col-md-12 col-lg-8 mb-5 ">
                        <div class="">
                            <h2 class="title">Facing a problem ?</h2>
                            <p>We are here to help. If you are facing any issues, please create a Ticket.We will get
                                back to
                                you
                                soon</p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4 support-req">
                        <VaButton class="support-req-btn" @click="routeTo('open-request')">Open A Support Request</VaButton>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="row portal-intro bg-white wrap">
                    <div class="col-sm-12 col-md-12 col-lg-12 ">
                        <div class="bg-white wrap mb-2">
                            <h2 class="title">Solution Guides </h2>
                            <p>Explore our solution guides to get some common queries answered</p>
                        </div>
                        <div class="wrap soln-guide">
                            <ul class="soln-guide-list">
                                <li>
                                    <a href="">Managing Payment and Order Request Issues</a>
                                    <p>How to manage some common payment and order issues</p>
                                </li>
                                <li>
                                    <a href="">Delivery Help Guide</a>
                                    <p>Sorting out frequently faced delivery issues</p>
                                </li>
                                <li>
                                    <a href="">Account and Authentication</a>
                                    <p>How to properly manage your accounts</p>
                                </li>
                                <li>
                                    <a href="">Refunds , Cancellation and Warranty</a>
                                    <p>View about our refund and cancellation policies in detail</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </FrontPageLayout>
</template>

<style scoped>
.portal-banner {
    background-color: #154ce1;
    color: #fff
}

.portal-banner .flx {
    justify-content: space-between;
}

.welcome-img {
    display: flex;
    justify-content: end;
}

.welcome-img img {
    max-width: 100%;
    max-height: 100%;
    position: relative;
    right: 0;
}

.portal-banner {
    max-height: 400px;
    overflow-y: hidden;

}

.welcome-text {
    padding: 30px 40px;
    padding-left: 110px;
}

.welcome-text h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.welcome-text p {
    color: #eeeded;
    font-size: 14px;
    max-width: 70%;
}

.support-req {
    display: flex;
    justify-content: end;

}

.support-req-btn {
    padding: 12px;
    float: right;
    display: block;
}

.section {
    margin: 20px 0;
}

.title::after {
    content: '';
    display: block;
    width: 120px;
    height: 3px;
    margin: 10px 0;
    background-color: #154ce1;
}

.portal-intro .title {
    font-size: 20px;
    margin-bottom: 12px
}

.portal-intro p {
    color: #666;
}

.wrap {
    padding: 20px;
    border-radius: 6px;
}

.soln-guide-list li {
    padding: 12px 6px;
}

.soln-guide-list li a {
    color: #154ce1;
    padding: 6px 0;
}

.soln-guide-list li p {
    font-size: 14px;
}

@media screen and (max-width:500px) {
    .support-req-btn {
        padding: 6px;
    }

    .support-req {
        justify-content: start;
    }

    .section {
        margin: 20px 5px;
    }

    .section .row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
}
</style>
