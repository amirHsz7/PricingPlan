<template>
    <header>
        <div class="relative py-4 border-b border-stroke w-full grid md:grid-cols-[auto_1fr_auto] gap-16 items-center">
            <div class="text-lg-b font-bold text-center">
                chainpay
            </div>
            <div class="hidden md:flex items-center gap-4">
                <LayoutsLink text="Features"/>
                <LayoutsLink text="Pricing"/>
                <LayoutsLink text="Dashboard"/>
                <LayoutsLink text="Resources"/>
                <LayoutsLink text="Comunity"/>
            </div>
            <div class="hidden md:flex items-center gap-2">
                <Button :wide="false" color="gray">Sign In</Button>
                <Button :wide="false" color="dark">Free Trial</Button>
            </div>

            <Button class="absolute right-0 md:hidden">
                <FontAwesomeIcon icon="fa-solid fa-user" />
            </Button>
        </div>
    </header>
</template>