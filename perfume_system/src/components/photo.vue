<template>
    <div>
        <form action="http://localhost:3000/photo/add" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <input type="file" name="photo" accept=".jpg,.png">
            </div>
            <div class="form-group">
                <button class="btn btn-primary form-control">上传头像</button>
            </div>
        </form>
    </div>
</template>
