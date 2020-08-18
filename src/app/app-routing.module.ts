import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "news-list",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "list",
    loadChildren: () =>
      import("./list/list.module").then((m) => m.ListPageModule),
  },
  {
    path: "news-list",
    loadChildren: () =>
      import("./news-list/news-list.module").then((m) => m.NewsListPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
