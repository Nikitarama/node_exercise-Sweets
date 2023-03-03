<template>

<h1>Admin Page</h1>
    <td>
        <table class="list" id="adminList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{parseInt([storeIndex]) + 1}}</td>
                    <td>{{product.prodName}}</td>
                    <td>{{product.prodDescription}}</td>
                    <td>R{{product.price}}</td>
                    <td><button id="{{product.ID}}" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </td>
</template>