<template>
    <header>
        <div class="py-4 border-b border-stroke w-full grid grid-cols-[auto_1fr_auto] gap-16 items-center">
            <div class="text-lg-b font-bold">
                chainpay
            </div>
            <div class="flex items-center gap-4">
                <LayoutsLink text="Features"/>
                <LayoutsLink text="Pricing"/>
                <LayoutsLink text="Dashboard"/>
                <LayoutsLink text="Resources"/>
                <LayoutsLink text="Comunity"/>
            </div>
            <div class="flex items-center gap-2">
                <Button :wide="false" color="gray">Sign In</Button>
                <Button :wide="false" color="dark">Free Trial</Button>
            </div>
        </div>
    </header>
</template>