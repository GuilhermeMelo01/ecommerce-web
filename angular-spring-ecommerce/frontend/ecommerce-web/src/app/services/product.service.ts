import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  private CategoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) { }

  //Get list of products
  getProductList(theCategoryId: number): Observable<Product[]> {
    // need to build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }

  //Get products for categories
  getProductCategories(): Observable<ProductCategory[]>{
    return this.httpClient.get<GetReponseProductCategory>(this.CategoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  //Search products
  searchProducts(theKeyword:string): Observable<Product[]>{
    //need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
  }

  //Get product for id
  getProduct(theProductId:number): Observable<Product>{
      const productUrl = `${this.baseUrl}/${theProductId}`;
      return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(thePage: number,
    thePageSize: number, theCategoryId: number): Observable<GetResponseProduct> {

    const url = `${this.baseUrl}/search/findByCategoryId`
      + `?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProduct>(url);
  }

  private getProducts(searchUrl: string): Observable<Product[]>{
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products));
  }
}

interface GetResponseProduct {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number,
  }
}

interface GetReponseProductCategory{
  _embedded:{
    productCategory: ProductCategory[];
  },
 
}